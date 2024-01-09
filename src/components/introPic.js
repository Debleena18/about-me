import React, { useState } from "react";
import myPic from "../assets/debleena_dp.png";
import Blob1 from "../assets/blob_2.svg";
import Blob2 from "../assets/blob_1.svg";
import "../styles/introPic.css"; // Ensure the path is correct

const IntroPic = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const BlobImage = ({ src, position, isHovered }) => {
    return <img src={src} alt={`blob${position}`} className={`blob-image blob-image--${position} ${isHovered ? 'rotate rotate--'+position : ''}`} />;
  };
  
  const ProfilePic = () => {
    return <img src={myPic} alt="myPic" className="profile-pic" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />;
  };

  return (
    <div className={`image-container ${className}`} >
      <BlobImage src={Blob2} position="back" isHovered={isHovered} />
      <BlobImage src={Blob1} position="front" isHovered={isHovered} />
      <ProfilePic />
    </div>
  );
};

export default IntroPic;
