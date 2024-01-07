import React from "react";
import loveIndiaWeb from "../assets/loveIndiaWeb.png";
import "../styles/loveIndia.css";

const LoveIndia = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-delay="700"
      data-aos-duration="500"
      id="loveIndiaContainer"
    >
      <img id="loveIndia" src={loveIndiaWeb} alt="Made with ❤ in India" />
    </div>
  );
};

export default LoveIndia;
