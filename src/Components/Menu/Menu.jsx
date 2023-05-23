import React from "react";
import "./Menu.css";
import Icon from "../../Images/Windy.svg";
import SettingsSvg from "../../Svg/SettingsSvg";
import MapSvg from "../../Svg/MapSvg";
import WeatherIconSvg from "../../Svg/WeatherIconSvg";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__status">
        <img src={Icon} alt="" />
      </div>
      <Link to="/">
        <div className="menu__svg-container">
          <WeatherIconSvg />
        </div>
      </Link>
      <div className="menu__svg-container">
        <MapSvg />
      </div>
      <Link to="/settings">
        <div className="menu__svg-container">
          <SettingsSvg />
        </div>
      </Link>
    </div>
  );
};

export default Menu;
