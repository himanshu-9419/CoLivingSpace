import React, { Component } from 'react';
import axios from 'axios';
class NearBy extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        var self = this;
        console.log(this.props);
        axios.get('http://prodapi.livezelo.com/centers/search-nearby-pgs-optimized?latitude=12.926804&longitude=77.670238')
            .then(function (response) {
                console.log(response.data.result);
                let jsonData = response.data.result;
                let data = [];
                data=jsonData.map(x=> {
                    return {id:x.id,name:x.name,addressLine1:x.addressLine1,addressLine2:x.addressLine2,image:x.cover_photo.thumb.url}
                })
                self.setState({
                            data: data
                })
                // axios.get('https://prodapi.livezelo.com/v2/pgs/57d93a2f631877034ff86c27/photos.json')
                //     .then(function (response) {
                //         self.setState({
                //             data: data
                //         })
                //     })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let elem=this.state.data.map(x=>(
             <a href={window.location.host+"/"+x.id}>
            <div class="card mt-3 mr-3 ml-3">
                <div className="nbImage" style={{height: 400 + 'px;',width:400+'px;' }} ><img className="img-fluid" src={x.image}/></div>
                <div><h1>{x.name}</h1></div>
                <div><p>{x.addressLine1}+{x.addressLine2}</p></div>
                <div>Rent Starts from </div>
            </div>
             </a>
        ))
        return (
            <div id="nbZolo">
                {elem}
            </div>
        );
    }
}

export default NearBy;
