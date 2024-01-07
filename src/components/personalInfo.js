import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { myPersonalInfo } from "../utils/config";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/personalInfo.css";
import { mapURI } from "../utils/config";
// import SimpleMap from "./googleMap";

const iconMap = {
  Email: MailOutlineIcon,
  Call: CallIcon,
  Location: LocationOnIcon,
};

const RenderIcon = ({ icon }) => {
  if (typeof iconMap[icon] !== "undefined") {
    return React.createElement(iconMap[icon], {
      className: "iamIcon",
      style: {fill: '#01579b'}
    });
  }
};

const RenderInfoCard = ({ title, value, link }) => {
  return (
    <div
      className="showInfoBox"
      onClick={() => (window.location.href = link)}
      className="showInfoBox"
    >
      <RenderIcon icon={title} />
      <div className="showMoreInfoBox">
        <span id="title">{title}</span>
        <span id="value">{value}</span>
      </div>
    </div>
  );
};

const PeronalInfo = () => {
  return (
    <div data-aos="slide-left" className="pInfoContainer">
      <div className="pInfoDetails">
        {myPersonalInfo.map((item) => (
          <RenderInfoCard {...item} />
        ))}
      </div>
      <div className="pInfoGMapContainer">
        {/* <SimpleMap /> */}
        <iframe
          src={mapURI}
          className="mapStyle"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PeronalInfo;
