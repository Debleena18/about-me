import React from "react";
import myPic from "../assets/debleena_dp.png";
import "../styles/introPic.css";

const IntroPic = (props) => {
  return (
    <div className="image-conatainer">
      <img src={myPic} className="myPic" alt="my-pic" />
    </div>
  );
};

export default IntroPic;
