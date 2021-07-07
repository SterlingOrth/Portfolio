import React from "react";
import SmallHeading from "../Hero/UI/SmallHeading";
import MediumHeading from "../Hero/UI/MediumHeading";
import DU from "../../assets/images/DU.jpg";
import JW from "../../assets/images/JW.jpg";
import Button from "../Hero/UI/Button";
import Tile from "../Hero/UI/Tile";
import "./style.css";

function Qualification() {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <div id="education" data-aos="flip-up">
        <SmallHeading text="Qualifications" />
        <MediumHeading text={"Education"} />
      </div>
      <div className="flexRow flexColumn justify-sb align-center">
        <div>
          <div data-aos="flip-left">
            <img src={DU} alt="University of Denver" />
            <img src={JW} alt="Johnson & Wales University" />
          </div>
          <div
            style={{
              Background: "#fff",
              padding: "10px 15px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div data-aos="zoom-in" className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div data-aos="zoom-in" className="mlr-10">
              <Button label="Download CV" />
            </div>
          </div>
        </div>
        <div>
          <div data-aos="flip-right">
            <Tile
              title="University of Denver"
              mediumTitle="Certificate of Completion"
              desc="FullStack Coding and Web Development"
            />
          </div>
          <div data-aos="flip-right">
            <Tile
              title="Johnson & Wales University"
              mediumTitle="Bachelor of Science"
              desc="Business Management"
            />
          </div>
          <div data-aos="flip-right">
            <Tile
              title="Johnson & Wales University"
              mediumTitle="Associate of Science"
              desc="Culinary Arts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
