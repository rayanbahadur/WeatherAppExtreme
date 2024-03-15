import React, { useState } from "react";
import { GrLocation, GrSearch } from "react-icons/gr";
import { BsThermometerHalf } from "react-icons/bs";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";

const Inputs = ({ setCity, unit, setUnit }) => {
  const [cityInput, setCityInput] = useState("");
  const { isLoading, error } = useAuth0();

  const handleCitySearch = () => {
    if (!cityInput) return;
    setCity(cityInput);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setCity(lat + "," + lon);
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCitySearch();
    }
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <img src="src\assets\favicon.png" alt="Weather App Logo" />
        <input
          type="text"
          placeholder="Search Location"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress on key press
        />
        <GrSearch
          onClick={handleCitySearch}
          size={20}
          className="icon"
        />
        <GrLocation
          onClick={handleLocationClick}
          size={20}
          className="icon"
        />
      </div>

      <div className="input-wrapper">
        <button className="unit-button"
          onClick={() => setUnit(unit === "c" ? "f" : "c")}
        >
          <BsThermometerHalf className="logIcon" />
          {`°${unit === "c" ? "F" : "C"}`}
        </button>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        )}
      </div>
    </div>
  );
};

export default Inputs;
