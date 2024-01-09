import React from "react";
import { myRoutes } from "../utils/config";
import "../styles/headerRoutes.css";
import NightDayToggle from "../components/NightDayToggle/NightDayToggle";

const RenderItem = ({ item }) => {
  const { title, click } = item;
  return (
    <li className="list-item">
      <a href={click}>
        {title}
      </a>
    </li>
  );
};

const HeaderRoutes = () => {
  return (
    <div className="header-route-container">
      <ul className="header-route-ul">
      <NightDayToggle />

        {myRoutes.map((item) => (
          <RenderItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderRoutes;
