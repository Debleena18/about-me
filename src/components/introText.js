import React from "react";
import "../styles/intro.css";

function IntroText(props) {
  return (
    <div style={{ position: "absolute", right: "10vw", top: "40vh" }}>
      <div>
        <p
          className="intro-text"
          id="changeSalutation"
          style={{
            display: "block",
            fontSize: 36,
            fontWeight: "bold",
            color: "#2a2a2a",
            margin: 0,
            zIndex: 1,
          }}
        ></p>
        <p
          className="intro-text"
          id="changeHeader"
          style={{
            display: "block",
            fontSize: 48,
            fontWeight: "bold",
            color: "#2a2a2a",
            margin: "-10px 0px -5px 0px",
            zIndex: 1,
          }}
        ></p>

        <div className="meter">
          <span></span>
        </div>
        <p
          className="intro-text"
          id="changeDesc"
          style={{
            display: "block",
            fontSize: 26,
            color: "#2a2a2a",
            width: 450,
            margin: 0,
          }}
        ></p>
      </div>
    </div>
  );
}

export default IntroText;
