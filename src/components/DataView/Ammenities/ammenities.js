import React, { Component } from 'react';

class Ammenities extends Component {
    render() {
        let amenities=this.props.amenities;
        var info = []; for (var key in amenities) {
            if (amenities.hasOwnProperty(key)) {
                if (amenities[key].available == "1") info.push(amenities[key].title)
            }
        }
        let amme=info.map(x=>(
            <div className="card mt-5 ml-5 mr-5 mb-5" ><img src={"\Assets/Images/" + x.toLowerCase()+".png"} alt={x}/></div>
        ))
        //console.log(info);
        return (
            <div className="amme" >
                Ammenities Available
                {amme}
            </div>
        )
    }
};
export default Ammenities;