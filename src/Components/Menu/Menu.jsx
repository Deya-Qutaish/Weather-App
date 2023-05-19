import React from "react";
import "./Menu.css";
import Icon from "../../Images/Windy.svg";
import SettingsSvg from "../../Svg/SettingsSvg";
import MapSvg from "../../Svg/MapSvg";
import WeatherIconSvg from "../../Svg/WeatherIconSvg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__status">
        <img src={Icon} alt="" />
      </div>
      <div className="menu__svg-container">
        <WeatherIconSvg />
      </div>
      <div className="menu__svg-container">
        <MapSvg />
      </div>
      <div className="menu__svg-container">
        <SettingsSvg />
      </div>
    </div>
  );
};

export default Menu;
