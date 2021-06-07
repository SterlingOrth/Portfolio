import React from "react";
import "../Card/style.css";

function Card({ className = null, children, style, ...res }) {
  const _class = className ? `card ${className}` : `card`;
  return (
    <div className={_class} style={style} {...res}>
      {children}
    </div>
  );
}

export default Card;
