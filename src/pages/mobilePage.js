import React from "react";
import IntroPicMobile from "../components/mobile/mobileIntroPic";

const MobilePage = () => {
  return (
    <div id="mobileContainer">
      <IntroPicMobile />
      <p id="mobileName">Hi, I'm Sourav</p>
      <p id="mobileTitle">Thanks for coming here.</p>
      <p id="mobileDesc">
        Sorry, but my website's mobile version is now under construction. Please
        use your desktop browser to access this website.
      </p>
    </div>
  );
};

export default MobilePage;
