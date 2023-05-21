import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchLocation }) => {
  const [inputValue, setInputValue] = useState();
  const [coordinates, setCoordinates] = useState();
  const [location, setLocation] = useState();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setLocation(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (location != null && location !== "") {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=London&appid=69c0a8afd6ac1db4862b0f9bcf36951f`
          );
          const data = await response.json();

          setSearchLocation(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getLocation();
  }, [location]);

  return (
    <form onSubmit={onSubmit}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for cities"
        value={inputValue}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;
