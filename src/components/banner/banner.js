import React from 'react';
import banner from './../../Images/banner image.png';
import './banner.css';
const Banner = () => (
    // <div className="container">
    <div className="row" id="banner">
        <div className="arrow" id="arrowLeft">&lt;</div>
        <div className="col-sm-12  "><img className="img-fluid" src={banner} alt="Zolo Stays" /></div>
        <div className="arrow" id="arrowLeft">&gt;</div>
    </div>
    // </div>
);
export default Banner;