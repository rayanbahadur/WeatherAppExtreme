// This component displays forecast data, including title, icon, and temperature, 
// organized in a vertical layout. It accepts title, unit, and forecast as props.

import React from "react";
const Forecast = ({ title, unit, forecast }) => {
  return (
    <div className="forecast-container">
        <p className="forecast-title-text2">{title}</p>

      {<hr className="forecast-divider2" />}

      <div className="forecast-items-container">
        {forecast.map(({ title, icon, temp_c, temp_f }) => (
          <div key={Math.random()} className="forecast-item">
            <p className="forecast-item-text">{title}</p>
            <img className="forecast-item-icon" src={icon} alt="///" />
            <p className="forecast-item-temperature">
              {unit === "c" ? temp_c + "°C" : temp_f + "°F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
