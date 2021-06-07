import React from "react";

function Tile({ title, mediumTitle, desc }) {
  return (
    <div
      className="mtb-10"
      style={{ background: "white", padding: "20px", width: "275px" }}
    >
      <p className="primaryColor font-12 bold-500 mtb-10 uppercase text-center">
        {title}
      </p>
      <p
        className="font-14 mtb-10 bold-600 uppercase uppercase text-center"
        style={{ color: "blue" }}
      >
        {mediumTitle}
      </p>
      <p className="font-12 mtb-10 uppercase uppercase text-center secondaryColor">
        {desc}
      </p>
    </div>
  );
}

export default Tile;
