// This component displays time and location information 
// including the location name, country, and local date time. 
// It accepts these details as props and renders them accordingly.

import React from "react";

const TimeAndLocation = ({ weather: { locDateTime, loc_name, loc_country } }) => {
  return (
    <div>

      <div className="time-location-location">
        <p className="location-text">{`${loc_name}, ${loc_country}`}</p>
      </div>

      <div className="time-location-datetime">
        <p className="time-text">{locDateTime}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
