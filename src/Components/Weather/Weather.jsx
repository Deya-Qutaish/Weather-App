import React from "react";
import "./Weather.css";
import SunnySvg from "../../Svg/SunnySvg";

const Weather = ({ weather }) => {
  const location = weather?.location;
  const currentWeather = weather?.current;

  const currentTime = new Date();

  const options = {
    timeZone: weather?.location?.tz_id,
    hour: "numeric",
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat(undefined, options);
  const formattedTime = formatter.format(currentTime);

  const [currentForecast] = weather?.forecast.forecastday[0].hour?.filter(
    (hour) => {
      return hour?.time.split(" ")[1].split(":")[0] === formattedTime;
    }
  );

  return (
    <div className="weather__container">
      <div className="weather__container-text">
        <h2>
          {location?.name} - {location.country}
        </h2>
        <h6>Chance of rain: {currentForecast?.chance_of_rain}%</h6>
        <h1>
          {currentWeather?.temp_c}°{" "}
          <img
            src={currentWeather?.condition.icon}
            alt={currentWeather?.condition.text}
          />
        </h1>
      </div>
    </div>
  );
};

export default Weather;
