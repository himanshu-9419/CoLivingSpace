import React from 'react';
const HeaderInfo = (props) => (
    // <div className="container">
    <div className="row" >
        <div className="col-md-7">
            <h1>{props.name}</h1>
            <p>{props.addressLine1}
            {props.addressLine2}</p>
        </div>
        <div className="col-md-5 vertical-center" >
            <div className="row float-right container" >
                <button className="btn col-md-4 btn-space ml-3 mr-3">Schedule Visit</button>
                <button className="btn btn-primary col-md-4 btn-space ml-3 mr-3">Book Now</button>
            </div>
        </div>
    </div>
    // </div>
);
export default HeaderInfo;