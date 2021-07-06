import React from "react";
import Card from "../Hero/UI/Card";

function Testimonials() {
  return (
    <div className="container">
      <div>
        <Card className="m-auto" style={{ padding: "30px", width: "500px" }}>
          <div data-aos="zoom-out-up">
            <p className="uppercase primaryColor font-16 bold-400 text-center mtb-10">
              Want to talk about a project?{" "}
              <span className="thirdColor"> Message me @ :</span>
            </p>
            <p className="uppercase text-center font-30 secondaryColor bold-600">
              sterling.d.orth@gmail.com
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Testimonials;
