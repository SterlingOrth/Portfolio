import React from "react";
import socialIcons from "../../../../assets/social-icons";
import "./style.css";

function SocialConnect(props) {
  return (
    <div className="socialConnect" style={props.style}>
      <span style={{ color: "#233e8b" }}>Follow Me On: </span>
      <a
        className="socialLink"
        target="_blank"
        href="https://www.facebook.com/sterling.orth"
      >
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a
        className="socialLink"
        target="_blank"
        href="https://github.com/SterlingOrth"
      >
        <img src={socialIcons.github} alt="" />
      </a>
      <a
        className="socialLink"
        target="_blank"
        href="https://www.instagram.com/therealsterlingorth/"
      >
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a
        className="socialLink"
        target="_blank"
        href="https://www.linkedin.com/in/sterlingorth/"
      >
        <img src={socialIcons.linkedin} alt="" />
      </a>
      <a
        className="socialLink"
        target="_blank"
        href="https://twitter.com/SterlingOrth"
      >
        <img src={socialIcons.twitter} alt="" />
      </a>
      {/* <a className="socialLink" target="_blank" href="#">
        <img src={socialIcons.tiktok} alt="" />
      </a> */}
      {/* <a className="socialLink" target="_blank" href="#">
        <img src={socialIcons.youtube} alt="" />
      </a> */}
    </div>
  );
}

export default SocialConnect;
