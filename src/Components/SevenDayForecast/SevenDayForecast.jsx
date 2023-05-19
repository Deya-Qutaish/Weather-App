import React from "react";
import "./SevenDayForecast.css";

const SevenDayForecast = ({ weather }) => {
  const forecast = weather.forecast.forecastday;

  return (
    <div className="weekForecast">
      <h5>7-DAY FORECAST</h5>
      <div className="weekForecast__container">
        {forecast.map((weather, i) => {
          const day = new Date(weather.date).toDateString().split(" ")[0];

          return (
            <>
              <div className="day__forecast">
                <h4 className="forecast__day">{i === 0 ? "Today" : day}</h4>
                <label>
                  <img
                    src={weather.day.condition.icon}
                    alt={weather.day.condition.text}
                  />
                  <h4 className="day__forecast-condition">
                    {weather.day.condition.text}
                  </h4>
                </label>
                <h4 className="forecast__temp">
                  <span className="forecast_maxtemp">
                    {Math.round(weather.day.maxtemp_c)}
                  </span>
                  /{Math.round(weather.day.mintemp_c)}
                </h4>
              </div>
              {i !== 6 ? <div className="forecast__divider"></div> : ""}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;
