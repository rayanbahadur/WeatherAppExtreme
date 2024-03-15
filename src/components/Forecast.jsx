import React from "react";
import "./Forecast.css";

const Forecast = ({ title, unit, forecast }) => {
  return (
    <div className="forecast-container">
      {/* <div className="forecast-title">
        <p className="forecast-title-text">{title}</p>
      </div> */}

      {/* <hr className="forecast-divider" /> */}

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
