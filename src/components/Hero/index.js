import React from "react";
import self2 from "../../assets/images/self2.png";
import Button from "./UI/Button";
import "../../components/style";

function Index() {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexColumn justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 ls-1 mtb-10">
            <span className="primaryColor">Hello</span>
            <span className="thirdColor">, </span>I am
            <span className="font-20"> Sterling Orth</span>
            <span className="thirdColor">.</span>
          </p>
          <h1 className="secondaryColor ls-1 mtb-10">
            FullStack Web Developer
          </h1>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse="true" />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meSelf2Container">
            <img src={self2} alt={"Picture of me"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
