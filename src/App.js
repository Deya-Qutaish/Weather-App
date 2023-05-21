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
  const [ip, setIp] = useState();
  const [ipLocation, setIpLocation] = useState();

  useEffect(() => {
    const getIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        setIp(data);
      } catch (err) {
        console.log(err);
      }
    };
    getIP();
  }, []);

  useEffect(() => {
    const getIpLocation = async () => {
      try {
        const response = await fetch(
          `http://api.positionstack.com/v1/reverse?access_key=7d8728b80ddb2e65aa72efbedd8eec03&query=212.34.12.48`
        );
        const data = await response.json();

        setIpLocation(data);
      } catch (err) {
        console.log(err);
      }
    };

    getIpLocation();
  }, []);
  console.log(ipLocation);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=41950efd61514fcd98c182816231805&q=virginia&aqi=no&days=7`
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
