import React from "react";
import { myRoutes } from "../utils/config";
import "../styles/headerRoutes.css";

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
        {myRoutes.map((item) => (
          <RenderItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderRoutes;
