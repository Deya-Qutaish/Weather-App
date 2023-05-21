import React from "react";
import "./AirConditions.css";
import TemperatureSvg from "../../Svg/TemperatureSvg";
import WindSvg from "../../Svg/WindSvg";
import RainSvg from "../../Svg/RainSvg";
import UVSvg from "../../Svg/UVSvg";

const AirConditions = ({ weather }) => {
  const currentWeather = weather.current;

  const currentTime = new Date();

  const options = {
    timeZone: weather?.location.tz_id,
    hour: "numeric",
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat(undefined, options);
  const formattedTime = formatter.format(currentTime);

  const [currentForecast] = weather.forecast.forecastday[0].hour?.filter(
    (hour) => {
      return hour.time.split(" ")[1].split(":")[0] === formattedTime;
    }
  );
  return (
    <div className="airConditions">
      <h5>AIR CONDITIONS</h5>
      <div className="airConditions__line1">
        <div className="airConditions__container">
          <TemperatureSvg />
          <label className="conditions__label">
            <h3>Real Feel</h3>
            <h2>{currentWeather.feelslike_c}°</h2>
          </label>
        </div>
        <div className="airConditions__container">
          <WindSvg />
          <label className="conditions__label">
            <h3>Wind</h3>
            <h2>{currentWeather.gust_kph} km/h</h2>
          </label>
        </div>
      </div>
      <div className="airConditions__line2">
        <div className="airConditions__container">
          <RainSvg />
          <label className="conditions__label">
            <h3>Chance of rain</h3>
            <h2>{currentForecast.chance_of_rain}%</h2>
          </label>
        </div>
        <div className="airConditions__container">
          <UVSvg />
          <label className="conditions__label">
            <h3>UV Index</h3>
            <h2>{currentWeather.uv}</h2>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
