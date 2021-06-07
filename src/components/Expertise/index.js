import React from "react";
import SmallHeading from "../Hero/UI/SmallHeading";
import MediumHeading from "../Hero/UI/MediumHeading";
import Card from "../Hero/UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../style";
import me from "../../assets/images/self3.jpg";
import SocialConnect from "../Hero/UI/SocialConnect";
import "./style.css";

const percentage = 70;

function Expertise(props) {
  return (
    <div className="container" style={{ marginTop: "50px", padding: "50px 0" }}>
      <div data-aos="fade-right" className="rightImageMeContainer">
        <img src={me} alt="" />
        <SocialConnect style={{ position: "absolute", bottom: "-40px" }} />
      </div>
      <div data-aos="fade-up">
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <Card
        style={{
          padding: "40px",
          width: "330px",
          margin: "100px auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div data-aos="fade-up" className="flexRow align-center">
          <div style={{ width: "75px", height: "75px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "#4a47a3",
                pathColor: colors.primaryColor,
              })}
            />
          </div>
          <h2 className="mlr-10" style={{ color: "green" }}>
            Development
          </h2>
        </div>

        <div data-aos="fade-up">
          {" "}
          <p className="mtb-10 font-10 secondaryColor text-center">
            React is Fun!
          </p>{" "}
        </div>
      </Card>
    </div>
  );
}

export default Expertise;
