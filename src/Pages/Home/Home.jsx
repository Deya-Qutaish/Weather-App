import React from "react";
import "./Home.css";
import Weather from "./../../Components/Weather/Weather";
import SearchBar from "./../../Components/SearchBar/SearchBar";
import TodayForecast from "./../../Components/TodayForecast/TodayForecast";
import AirConditions from "./../../Components/AirConditions/AirConditions";
import SevenDayForecast from "./../../Components/SevenDayForecast/SevenDayForecast";

const Home = ({ weather, setSearchLocation }) => {
  return (
    <>
      {weather ? (
        <>
          <div>
            <SearchBar setSearchLocation={setSearchLocation} />
            <Weather weather={weather} />
            <TodayForecast weather={weather} />
            <AirConditions weather={weather} />{" "}
          </div>
          <div>
            <SevenDayForecast weather={weather} />
          </div>
        </>
      ) : (
        <div className="spinner__container">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
