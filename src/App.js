import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import SearchBar from "./Components/SearchBar/SearchBar";
import TodayForecast from "./Components/TodayForecast/TodayForecast";
import Weather from "./Components/Weather/Weather";
import AirConditions from "./Components/AirConditions/AirConditions";
import SevenDayForecast from "./Components/SevenDayForecast/SevenDayForecast";

function App() {
  const [weather, setWeather] = useState();
  const [searchLocation, setSearchLocation] = useState();

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=41950efd61514fcd98c182816231805 &q=leeds&aqi=no&days=7"
        );
        const data = await response.json();

        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
  }, []);

  return (
    <div className="App">
      <Menu />
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
        <h1>404 INFO NOT FOUND</h1>
      )}
    </div>
  );
}

export default App;
