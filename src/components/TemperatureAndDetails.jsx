// This component renders temperature and additional weather details, 
// including real feel, humidity, wind speed, sunrise, sunset, moonrise, and moonset times. 
// It provides both horizontal and vertical layout options for displaying details. 
// Icons from various weather conditions are utilized for visual representation.

import React from "react";


const TemperatureAndDetails = ({
  unit,
  weather: {
    condition_icon,
    condition_text,
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    sunrise,
    sunset,
    moonrise,
    moonset,
  },
}) => {

  return (
    <div>
      <div className="weather-condition">{condition_text}</div>

      <div className="temperature-details">
        <img className="weather-icon" src={condition_icon} alt="weather icon" />

        <p className="temperature">
          {unit === "c" ? temp_c : temp_f}
          <sup>°{unit === "c" ? "C" : "F"}</sup>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
