import React from "react";

const ForecastDaily = ({ title, unit, forecast }) => {
  return (
    <div className="forecast-container2">
      <div className="forecast-title2">
        <p className="forecast-title-text2">{title}</p>
      </div>

      <hr className="forecast-divider" />

      <div className="forecast-items-container2">
        {forecast.map(({ title, icon, temp_c, temp_f }) => (
          <div key={Math.random()} className="forecast-item2">
            <p className="forecast-item-text2">{title}</p>
            <img className="forecast-item-icon2" src={icon} alt="///" />
            <p className="forecast-item-temperature2">
              {unit === "c" ? temp_c + "°C" : temp_f + "°F"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDaily;
