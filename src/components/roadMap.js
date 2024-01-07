import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CakeIcon from "@mui/icons-material/Cake";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import { timelineData } from "../utils/timelineData";
import "../styles/roadMap.css";
import Typewriter from "./common/typewritter";

const KeysToComponentMap = {
  cake: CakeIcon,
  work: BusinessCenterIcon,
  study: SchoolIcon,
};

const RenderIcon = ({ props }) => {
  if (typeof KeysToComponentMap[props.icon] !== "undefined") {
    return React.createElement(KeysToComponentMap[props.icon], {
      className: "pointIcon",
    });
  }
};

const PrimaryCard = ({ te, idx }) => {
  return (
    <>
      <div className={`container`}>
        <div
          className={`card animate ${
            idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
          }`}
        >
          <p className="title">{te.title}</p>
          <p className="date">{te.date}</p>
          <p className="desc">{te.description}</p>
        </div>
        <div className="pointContainer">
          <RenderIcon props={te} />
        </div>
      </div>
    </>
  );
};

const RoadMap = () => {
  const items = timelineData;

  const animateFromTo = (elem, direction) => {
    const offset = 1000;
    let x = 0;
    let y = direction * offset;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem);
        },
        onEnterBack: function () {
          animateFromTo(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div id='journey'>
      <Typewriter text={['Journey So Far...' ]}/>

      <div className="timeline">
        <ul>
          {items.map((te, idx) => (
            <li key={`${te.title}_${te.date}`}>
              <PrimaryCard te={te} idx={idx} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadMap;
