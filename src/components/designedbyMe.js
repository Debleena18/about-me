import React from "react";
import myLogo from "../assets/D-logo.png";
import "../styles/designedByMe.css";

const DesignedByMe = () => {
  return (
    <div className="designMeContainer">
      <img src={myLogo} className="myLogo" alt="my-logo" />
      <div className="dsnMeUnderline" />
      <p className="dsnMeDesc">Website design, animation and code by</p>
      <p className="dsnMeName">Debleena Sarkar</p>
    </div>
  );
};

export default DesignedByMe;
