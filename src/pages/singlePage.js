import React, { Component } from "react";
import HeaderRoutes from "../components/headerRoutes";
import IntroPic from "../components/introPic";
import IntroText from "../components/introText";
import StickyNav from "../components/stickyNav";
import Skills from "../components/skills";
import Projects from "../components/projects";
import RoadMap from "../components/roadMap";
import ScrollButton from "../components/scrollToTop";
import DownloadResume from "../components/downloadCV";
import { HeaderBg, FooterBg } from "../components/background";
import ContactMe from "../components/contactMe";
import DesignedByMe from "../components/designedbyMe";
import LoveIndia from "../components/loveIndia";

import "../styles/common.css";

class SinglePage extends Component {
  render() {
    return (
      <div>
        <StickyNav />
        <HeaderBg />
        <HeaderRoutes />
        <IntroPic />
        <IntroText />
        <RoadMap />
        <Skills />
        <ScrollButton />
        <ContactMe />
        <div style={{ position: "relative" }}>
          <DownloadResume />
          <DesignedByMe />
          <LoveIndia />
          <FooterBg />
        </div>
      </div>
    );
  }
}

export default SinglePage;
