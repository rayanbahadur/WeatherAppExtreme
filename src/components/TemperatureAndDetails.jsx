// This component renders temperature and additional weather details, 
// including real feel, humidity, wind speed, sunrise, sunset, moonrise, and moonset times. 
// It provides both horizontal and vertical layout options for displaying details. 
// Icons from various weather conditions are utilized for visual representation.

import React from "react";
import { BsThermometerHalf } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

function RenderDetail(props) {
  const Icon = props.icon;
  return (
    <div className="detail-item">
      <Icon className="detail-icon" size={20} />
      <span className="detail-text">{`${props.text} :`}</span>
      <span className="detail-data">{props.data}</span>
    </div>
  );
}

function RenderVerticalDetail(props) {
  const Icon = props.icon;
  return (
    <div className="detail-item">
      <Icon size={45} />
      <p className="detail-text">{props.text}</p>
      <p className="detail-data">{props.data}</p>
    </div>
  );
}

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
  const horizontalDetails = [
    {
      id: 1,
      icon: BsThermometerHalf,
      text: "real feel",
      data: `${unit === "c" ? feelslike_c : feelslike_f}°`,
    },
    {
      id: 2,
      icon: MdOutlineWaterDrop,
      text: "humidity",
      data: `${humidity}%`,
    },
    {
      id: 3,
      icon: FiWind,
      text: "wind",
      data: `${unit === "c" ? wind_kph + " km/h" : wind_mph + "m/h"}`,
    },
  ];

  const verticalDetails = [
    {
      id: 1,
      icon: WiSunrise,
      text: "sunrise",
      data: sunrise,
    },
    {
      id: 2,
      icon: WiSunset,
      text: "sunset",
      data: sunset,
    },
    {
      id: 3,
      icon: WiMoonrise,
      text: "moonrise",
      data: moonrise,
    },
    {
      id: 4,
      icon: WiMoonset,
      text: "moonset",
      data: moonset,
    },
  ];

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
