import React, { useContext } from "react";
import '../styles/projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Portfolio_V1 from "../assets/Portfolio_V1.png";
import NetflixClone from "../assets/NetflixClone.png";
import GymApp from "../assets/GymApp.png";
// import { themeContext } from "../../Context";

const Projects = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}

      <span style={{color: "brown", fontWeight: "bold", width: "400px", height: "400px"}}>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://portfolio18d.netlify.app//">
          <img
            src={Portfolio_V1}
            alt=""
            width="400rem"
            heigh="400rem"
            filter="drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))"
            border-radius="15px"
          />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://gym-master1c2691.netlify.app/">
            <img
              src={GymApp}
              alt=""
              width="400rem"
              heigh="400rem"
              filter="drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))"
              border-radius="15px"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://netflix-movieapp.web.app/">
            <img
              src={NetflixClone}
              alt=""
              width="480rem"
              heigh="400rem"
              filter="drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))"
              border-radius="15px"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
