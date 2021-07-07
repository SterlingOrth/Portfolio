import React from "react";
import Card from "../Hero/UI/Card";
import SmallHeading from "../Hero/UI/SmallHeading";
import MediumHeading from "../Hero/UI/MediumHeading";
import AA from "../../assets/projects/alcoholDisplay.jpg";
import KeepDreaming from "../../assets/projects/keepDreaming.PNG";
import Ecommerce from "../../assets/projects/eCommerce.jpg";
import "./style.css";

function LatestProjects() {
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <div data-aos="fade-down" className="mtb-10" id="portfolio">
      <SmallHeading text="Portfolio" />
      <MediumHeading text="Latest Projects" />
      </div>
      <Card className="flexRow flexColumn align-center justify-sb">
      <div data-aos="fade-up-right" className="projectImgContainer text-center">
      <div style={{color: "purple"}} className="bold-600 font-18">
          Alcohol Archives
        </div>
      <div style={{color: "darkblue"}} className="underline ptb-5">
        HTML/CSS, JavaScript & Bootstrap
        </div>
        <a href="https://sterlingorth.github.io/Alcohol_Archives/" target="_blank">
        <img className="photo" src={AA} alt="Alcohol Archives" />
        </a>
        </div>
        <div data-aos="fade-up" className="projectImgContainer text-center">
      <div style={{color: "purple"}} className="bold-600 font-18">
      Keep Dreaming
        </div>
      <div style={{color: "darkblue"}} className="underline ptb-5">
        JavaScript, express, MySQL & Sequelize 
        </div>
        <a href="https://frozen-journey-37808.herokuapp.com/" target="_blank">
        <img className="photo" src={KeepDreaming} alt="Keep Dreaming" />
        </a>
        </div>
        <div data-aos="fade-up-left" className="projectImgContainer text-center">
      <div style={{color: "purple"}} className="bold-600 font-18">
      Ecommerce
        </div>
      <div style={{color: "darkblue"}} className="underline ptb-5">
        React.JS, MongoDB, express & Node.JS
        </div>
        <a href="https://test-commerce-23.herokuapp.com/" target="_blank">
        <img className="photo" src={Ecommerce} alt="Merch eCommerce" />
        </a>
        </div>

        


        
        {/* <div data-aos="fade-up-right" className="projectPortfolioContainer">
          <SmallHeading className="primaryColor" text="Portfolio" />
          <MediumHeading text="Latest Projects" />
          <div className="mtb-10 flexRow" style={{ justifyContent: "center" }}>
            <Button2 Link to="/Projects" label="Portfolios" />
          </div>
        </div> */}

      </Card>
    </div>
  );
}

export default LatestProjects;
