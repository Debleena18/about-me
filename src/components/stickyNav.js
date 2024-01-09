import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ForumIcon from "@mui/icons-material/Forum";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import "../styles/navbar.css";

function StickyNav() {
  const [displayNav, setDisplayNav] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setDisplayNav(window.scrollY > 0);
      !window.scrollY && setToggleActive(false);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const handleToggle = () => {
    setToggleActive(!toggleActive);
  };

  return (
    <div
      style={{ display: displayNav ? "block" : "none", zIndex: 100 }}
      className="nav-container"
    >
      <div
        className={`circular-menu ${toggleActive ? "active" : ""} circular-menu-left`}
      >
        <a className="floating-btn" onClick={handleToggle}>
          {toggleActive ? <CloseIcon className="iconSize" /> : <MenuIcon className="iconSize" />}
        </a>

        <menu className="items-wrapper">
          {[
            { title: "My Journey", icon: <AirplaneTicketIcon fontSize="large" />, link: "#journey" },
            { title: "My Skills", icon: <AutoFixHighIcon fontSize="large" />, link: "#skills" },
            { title: "My Projects", icon: <FolderSharedIcon fontSize="large" />, link: "#projects" },
            { title: "Contact Me", icon: <ForumIcon fontSize="large" />, link: "#ContactMe" },
            { title: "My Resume", icon: <AttachFileIcon fontSize="large" />, link: "#resume" },
          ].map(({ title, icon, link }, index) => (
            <Tooltip
              key={index}
              TransitionComponent={Zoom}
              title={title}
              placement={index <= 1 ? "right" : index === 2 ? "right-start" : index === 3 ? "top-end" : "top"}
              arrow
            >
              <a href={link} className="menu-item">
                {icon}
              </a>
            </Tooltip>
          ))}
        </menu>
      </div>
    </div>
  );
}

export default StickyNav;

// Styles
