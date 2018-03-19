import React, { Component } from 'react';
import axios from 'axios';
import HeaderInfo from "./../../components/DataView/HeaderInfo/headerInfo";
import Description from "./../../components/DataView/Description/description";
import Room from './../../components/DataView/Room/room';
import Food from './../../components/DataView/Food/food';
import Ammenities from './../../components/DataView/Ammenities/ammenities';
import Location from './../../components/DataView/Location/location';
import NearBy from './../nearBy/nearBy';
import  './propertyView.css'
class PropertyView extends Component {
    constructor(props) {
        super(props);
        this.state = { test: "ok", data: {}, selectedTab:"Description" };
        this.handleTabClick = this.handleTabClick.bind(this);
    }
    handleTabClick(tab){
        this.setState({
            selectedTab:tab
        })
    }
    componentDidMount() {
        var self = this;
        var id = window.location.pathname.slice(0, window.location.pathname.length).replace('/', '') || "57d67349631877034ff85ab2";
        axios.get('https://prodapi.livezelo.com/pgs/details/'+id+'.json')
            .then(function (response) {
                console.log(response.data.result);
                let jsonData = response.data.result[0];
                let data={};
                data.name=jsonData.name;
                data.addressLine1 = jsonData.addressLine1;
                data.addressLine2 = jsonData.addressLine2;
                data.description=jsonData.description;
                data.sharing=jsonData.extraInfo.sharingMap;
                data.food=jsonData.food;
                data.amenities=jsonData.amenities;
                data.location=jsonData.location;
                data.neighborhood=jsonData.neighborhood;
                axios.get('https://prodapi.livezelo.com/v2/pgs/'+id+'/photos.json')
                    .then(function (response) {
                        self.setState({
                            data:data
                        })    
                    })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let test=this.state.test;
        let heading = ["Description", "Room Types", "Food", "Ammenities", "Location"].map((x,index) =>
            (<div onClick={()=>this.handleTabClick(x)} className={"col-sm-2 " + (this.state.selectedTab==x ? 'selectedTab' : '')} key={heading}>{x}</div>)
            );
        return (
            <div>
                <HeaderInfo  name={this.state.data.name} addressLine1={this.state.data.addressLine1} addressLine2={this.state.data.addressLine2} ></HeaderInfo>
                <div class="headingSelector row bottomBorder">{heading}</div>
                {this.state.selectedTab=="Description" ? (<Description description={this.state.data.description} />) : ("")}
                {this.state.selectedTab == "Room Types" ? (<Room room={this.state.data.sharing} />) : ("")}
                {this.state.selectedTab == "Food" ? (<Food food={this.state.data.food}/>) : ("")}
                {this.state.selectedTab == "Ammenities" ? (<Ammenities amenities={this.state.data.amenities} />) : ("")}
                {this.state.selectedTab == "Location" ? (<Location location={this.state.data.location} neighborhood={this.state.data.neighborhood}/>) : ("")} 
                <NearBy location={this.state.data.location}/>
            </div>
        );
    }
}

export default PropertyView;
