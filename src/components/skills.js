import React from "react";
import reactLogo from "../assets/react.svg";
import reduxLogo from "../assets/redux.svg";
import materialUILogo from "../assets/material-ui.svg";
import swaggerLogo from "../assets/swagger.svg";
import html5Logo from "../assets/html-5.svg";
import css3Logo from "../assets/css-3.svg";
import linuxTuxLogo from "../assets/linux-tux.svg";
import gitIcon from "../assets/git-icon.svg";
import javascriptLogo from "../assets/javascript.svg";
import jestLogo from "../assets/jest.svg";
import reactTestingLibraryLogo from "../assets/testing-library.svg";
import reactNativeIcon from "../assets/react-native-icon.svg";
import "../styles/skills.css";
import { mySkillsList } from "../utils/config";
import Typewriter from "./common/typewritter";

const logoImages = {
  reactLogo: reactLogo,
  reactNativeIcon: reactNativeIcon,
  reduxLogo: reduxLogo,
  materialUILogo: materialUILogo,
  swaggerLogo: swaggerLogo,
  html5Logo: html5Logo,
  css3Logo: css3Logo,
  linuxTuxLogo: linuxTuxLogo,
  gitIcon: gitIcon,
  javascriptLogo: javascriptLogo,
  jestLogo: jestLogo,
  reactTestingLibraryLogo: reactTestingLibraryLogo,
};

const SkillCard = ({ skillIndex, skillDetails }) => {
  const { skillName, logoImageName, skillDescription } = skillDetails;
  const animationStyle =
    skillIndex % 2 === 0
      ? "fade-down"
      : skillIndex % 3 === 0
      ? "fade-left"
      : "fade-right";
  return (
    <div data-aos={animationStyle} className="card2">
      <div className="skillIconBall">
        <img className="skillSVG" alt={skillName} src={logoImages[logoImageName]} />
      </div>
      <div className="skillDescription">
        <span className="skillTitle">{skillName}</span>
        <span className="skillText">{skillDescription}</span>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div id="skills" className="skillsContainer">
      <Typewriter text={["Checkout my Skills..."]} />
      <div className="showSkills">
        {mySkillsList.map((skill, index) => (
          <SkillCard skillIndex={index} skillDetails={skill} key={skill.skillName} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
