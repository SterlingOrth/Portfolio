import React from "react";
import Card from "../Hero/UI/Card";
import MediumHeading from "../Hero/UI/MediumHeading";
import SmallHeading from "../Hero/UI/SmallHeading";
import SmallHeading2 from "../Hero/UI/SmallHeading2";
import Skill from "../Hero/UI/Skills";
import { colors } from "../../components/style";
import "./style.css";

function Specializing(props) {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "limeGreen",
    },
    {
      skillName: "JavaScript",
      desc: "Hands on experience in JavaScript",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "limeGreen",
    },
    {
      skillName: "JQuery",
      desc: "Hands on experience in JQuery",
      value: 55,
      textColor: colors.primaryColor,
      pathColor: "#f9b208",
    },
    {
      skillName: "Bootstrap",
      desc: "Hands on experience in Bootstrap",
      value: 65,
      textColor: colors.primaryColor,
      pathColor: "limeGreen",
    },
    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#f9b208",
    },
    {
      skillName: "NodeJS",
      desc: "Hands on experience in NodeJS",
      value: 35,
      textColor: colors.primaryColor,
      pathColor: "red",
    },
    {
      skillName: "PHP",
      desc: "Hands on experience in PHP",
      value: 30,
      textColor: colors.primaryColor,
      pathColor: "red",
    },
    {
      skillName: "MySQL",
      desc: "Hands on experience in MySQL",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "limeGreen",
    },
    {
      skillName: "express",
      desc: "Hands on experience in express",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "limeGreen",
    },
    {
      skillName: "MongoDB",
      desc: "Hands on experience in MongoDB",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "limeGreen",
    },
  ];
  return (
    <div className="container">
      <Card style={{ padding: "45px", width: "100%" }}>
        <div data-aos="zoom-out-up">
          <SmallHeading2 text="My Skills" />
          <MediumHeading text="Specializing In" />
        </div>
        <div
          data-aos="zoom-out-up"
          className="flexRow wrap justify-sb font-25 bold-400 mtb-10"
          style={{ padding: "30px", color: "green" }}
        >
          <div>
            HTML5/CSS
            <div>
              JQuery
              <div>
                Bootstrap
              </div>
            </div>
          </div>
          <div>
          JavaScript
            <div>
              ReactJS
              <div>
                PHP
              </div>
            </div>
          </div>
          <div>
            MySQL
            <div>
              express
              <div>
                MongoDB
              </div>
            </div>
          </div>

          {/* {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={skill.textColor}
              pathColor={skill.pathColor}
            />
          ))} */}
        </div>
        
      </Card>
    </div>
  );
}

export default Specializing;
