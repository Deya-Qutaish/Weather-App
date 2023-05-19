import React from "react";
import "./TodayForecast.css";

const TodayForecast = ({ weather }) => {
  const forecast = weather?.forecast.forecastday[0].hour;
  const forecastArray = forecast
    ? [
        forecast[6],
        forecast[9],
        forecast[12],
        forecast[15],
        forecast[18],
        forecast[21],
      ]
    : [];

  return (
    <div className="today__forecast">
      <h5>TODAY'S FORECAST</h5>
      <div className="today__forecast-container">
        <div className="today__forecast-weather">
          {forecastArray?.map((forecast, i) => {
            const time = forecast.time.split(" ")[1].split(":");
            let divider;
            if (i !== 5) {
              divider = <div className="today__forecast-divider"></div>;
            }
            return (
              <>
                <div key={i}>
                  <h5>{`${time[0] < 13 ? time[0] : time[0] - 12}:00 ${
                    time[0] < 13 ? "AM" : "PM"
                  }`}</h5>
                  <img src={forecast.condition.icon} alt="" />
                  <h3>{Math.round(forecast.temp_c)}°</h3>
                </div>
                {divider}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
