import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Settings from "./Pages/Settings/Settings";

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
    const getLocation = async () => {
      if (ip) {
        const response = await fetch(
          `https://api.techniknews.net/ipgeo/${ip.ip}`
        );
        const data = await response.json();

        setIpLocation(data);
      }
    };
    getLocation();
  }, [ip]);

  useEffect(() => {
    const getWeather = async () => {
      // const currentQuery = searchLocation
      //   ? searchLocation[0].name
      //   : ipLocation.city;

      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=41950efd61514fcd98c182816231805&q=${
            searchLocation ? searchLocation[0].name : ipLocation.city
          }&aqi=no&days=7`
        );
        const data = await response.json();

        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    getWeather();
  }, [ipLocation, searchLocation]);
  console.log(weather);

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Home weather={weather} setSearchLocation={setSearchLocation} />
          }
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
