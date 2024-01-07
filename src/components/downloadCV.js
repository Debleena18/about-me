import React, { useState } from "react";
import Typewriter from "./common/typewritter";
import { downloadResumeConfig } from "../utils/config";
import "../styles/downloadCV.css";

const Download = ({ checked, setchecked, downloadResumeConfig }) => {
  const { fileLink } = downloadResumeConfig;

  const downloadFile = () => {
    if (!checked) {
      window.location = fileLink;
    }
    setchecked(!checked);
  };

  return (
    <div id="ms-container">
      <label for="ms-download">
        <div className="ms-content">
          <div className="ms-content-inside">
            <input
              onChange={downloadFile}
              value={checked}
              type="checkbox"
              id="ms-download"
            />
            <div className="ms-line-down-container">
              <div className="ms-line-down"></div>
            </div>
            <div className="ms-line-point"></div>
          </div>
        </div>
      </label>
    </div>
  );
};

const DownloadResume = () => {
  const [checked, setchecked] = useState(null);
  const props = { checked, setchecked, downloadResumeConfig };

  return (
    <div
      id="resume"
      style={{ margin: "0 100px 0 100px", width: "90%", position: "relative" }}
    >
      <Typewriter text={["Here is my Resume...", "Click to download..."]} />
      <div
        data-aos="zoom-in"
        style={{ position: "absolute", margin: 50, paddingBottom: 280 }}
      >
        <Download {...props} />
      </div>
    </div>
  );
};

export default DownloadResume;
