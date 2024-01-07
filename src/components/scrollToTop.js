import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/scrollToTop.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleVisible = () => {
    const decision = scrollIdentifier();
    setVisible(decision);
    if (!decision && hovered) {
      setHovered(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const BeforeHover = () => (
    <div className="scroll-btn-normal">
      <NavigationIcon style={{ fontSize: 48 }} />
    </div>
  );

  const AfterHover = () => (
    <div className="scroll-btn-hover">
      <NavigationIcon style={{ fontSize: 48 }} />
      <span className="btn-text">Scroll up ?</span>
    </div>
  );

  return (
    <div className={`scroll-container-outer ${visible ? "visible" : ""}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={scrollToTop}
        className={`scroll-container ${hovered ? "hovered" : ""}`}
      >
        {hovered ? <AfterHover /> : <BeforeHover />}
      </div>
    </div>
  );
};

export default ScrollButton;
