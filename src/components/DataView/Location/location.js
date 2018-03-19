import React,{Component} from 'react';

class Location extends Component {
    render() {
        let location = this.props.location;
        let neighbourhood =[];
        for (var key in this.props.neighborhood) {
            if (this.props.neighborhood.hasOwnProperty(key)) {
                neighbourhood.push(this.props.neighborhood[key]);
            }
        }
        let elem = neighbourhood.map((x,index)=>(
            <div key={index} >{x.distance} from {x.title}</div>
        ))
        return (
            <div className="" >
                {elem}
            </div>
        )
    }
};
export default Location;