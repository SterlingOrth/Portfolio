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
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Education</a>
            <a href="#">Contact</a>
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
