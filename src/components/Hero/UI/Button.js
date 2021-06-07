import React from "react";
import { colors } from "../../style";

function Button(props) {
  return (
    <a
      href="#"
      style={{
        boxSizing: "border-box",
        padding: "10px 20px",
        background: props.inverse ? "transparent" : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : "#fff",
        display: "inline-block",
        textAlign: "center",
        borderRadius: "25px",
        boxShadow: props.inverse ? "none" : "0px 0px 10px 0px cyan",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColor : "transparent",
        fontSize: "14px",
        letterSpacing: "1px",
      }}
    >
      {props.label}
    </a>
  );
}

export default Button;
