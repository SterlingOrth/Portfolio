import React from "react";
import SocialConnect from "../Hero/UI/SocialConnect";
import "./style.css";

function Footer() {
  return (
    <div className="container">
      <div
        className="flexRow flexColumn justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="#" style={{color: "white"}}>Home</a>
            <a href="#" style={{color: "white"}}>About</a>
            <a href="#" style={{color: "white"}}>Portfolio</a>
            <a href="#" style={{color: "white"}}>Education</a>
            <a href="#" style={{color: "white"}}>Contact</a>
          </nav>
        </div>
        {/* <div>
          <img src="#" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
