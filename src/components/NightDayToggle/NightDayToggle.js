import React, { useState } from 'react';
import './NightDayToggle.css';
import Day from "./Day.svg"
import Night from "./Night.svg"
import NightBright from "./NightBright.svg"

function NightDayToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='dark-mode-toggle'>
      <input type="checkbox" id="darkmode-toggle" checked={isDarkMode} onChange={handleToggle} />
      <label htmlFor="darkmode-toggle">
        <img className={`darkModeSvg ${isDarkMode ? "sun" : ''}`} alt={"day"} src={Day} />
        <img className="darkModeSvg" alt={"moon"} src={isDarkMode ? NightBright : Night} />
      </label>
    </div>
  );
}

export default NightDayToggle;
