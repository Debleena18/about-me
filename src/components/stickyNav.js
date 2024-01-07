import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import scrollIdentifier from "../utils/scrollIdentifier";
import "../styles/navbar.css";

function StickyNav() {
  const [displayNav, setdisplayNav] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  const toggleVisible = () => {
    setdisplayNav(scrollIdentifier());
    !scrollIdentifier() && setToggleActive(false);
  };

  const onActiveToggle = () => {
    setToggleActive(!toggleActive);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      style={{ display: displayNav ? "inline" : "none", zIndex: 100 }}
      className="nav-container"
    >
      <div
        id="circularMenu1"
        className={`${
          toggleActive ? "active" : ""
        } circular-menu circular-menu-left`}
      >
        <a className="floating-btn" onClick={onActiveToggle}>
          {toggleActive ? (
            <CloseIcon class="iconSize" />
          ) : (
            <MenuIcon class="iconSize" />
          )}
        </a>

        <menu className="items-wrapper">
          <Tooltip
            TransitionComponent={Zoom}
            title="Home"
            placement="right"
            arrow
          >
            <a href="#" className="menu-item fa fa-home">
              <HomeIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="My Journey"
            placement="right"
            arrow
          >
            <a href="#journey" className="menu-item fa fa-user">
              <AirplanemodeActiveIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="My Skills"
            placement="right-start"
            arrow
          >
            <a href="#skills" className="menu-item fa fa-pie-chart">
              <SettingsEthernetIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="Contact Me"
            placement="top-end"
            arrow
          >
            <a href="#ContactMe" className="menu-item fa fa-cog">
              <ForumIcon fontSize="large" />
            </a>
          </Tooltip>

          <Tooltip
            TransitionComponent={Zoom}
            title="My Resume"
            placement="top"
            arrow
          >
            <a href="#resume" className="menu-item fa fa-pie-chart">
              <AttachFileIcon fontSize="large" />
            </a>
          </Tooltip>
          
          {/* <a href="#" className="menu-item fa fa-cog"></a> */}
        </menu>
      </div>
    </div>
  );
}

export default StickyNav;
