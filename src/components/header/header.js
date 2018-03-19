import React from 'react';
import logo from './../../Images/logo.JPG';
import search from './../../Images/search.svg';
import notificationIcon from './../../Images/notification.JPG';
import ovalIcon from "./../../Images/Oval.png";
import './header.css';
const Header=()=>(
    // <div className="container">
    <div className="row">
        <div className="col-sm-1"><img src={logo} alt="Zolo Stays" /></div>
        <div className="col-sm-6" id="searchArea">
            <img src={search} />
            <input id="textSearch" type="text" placeholder="Search By City, Locality, Property Name" autoComplete="off"/>
        </div>
        <div className="col-sm-5 row  float-left" id="pageInfo">
            <div className="col-sm-9 row" id="selectionPannel">
                <div className="col-sm-6"  id="aboutLink">About</div>
                <div className="col-sm-6" id="downloadLink">Download App</div>
            </div>
            <div className="col-sm-3 row float-left" id="notificationAndUser">
                <div className="col-sm-6" id="notification"><img src={notificationIcon} alt="Zolo Stays" /></div>
                <div className="col-sm-6" id="userInfo"><img src={ovalIcon} alt="Zolo Stays" /></div>
            </div>
        </div>
    </div>
    // </div> 
);
export default Header;