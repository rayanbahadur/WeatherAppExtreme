// This component renders various weather details, such as real feel temperature, 
// humidity, wind speed, pressure, and precipitation. 
// It utilizes icons to represent each detail and allows for displaying data in a horizontal layout. 
// The component receives weather data as props and formats it accordingly based on the selected unit.

import React from "react";
import { BsThermometerHalf } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { TbGauge } from "react-icons/tb";
import { IoRainyOutline } from "react-icons/io5";

function RenderDetail(props) {
  const Icon = props.icon;
  return (
    <div className="detail-item2">
      <span className="detail-text2">{`${props.text}`}</span>
      <span className="detail-data2"><Icon className="detail-icon2" size={20} />{props.data}</span>
    </div>
  );
}

const WeatherDetails = ({
  title,
  unit,
  weather: {
    feelslike_c,
    feelslike_f,
    humidity,
    wind_kph,
    wind_mph,
    pressure_mb,
    pressure_in,
    precip_mm,
    precip_in,
  },
}) => {
  const horizontalDetails = [
    {
      id: 1,
      icon: BsThermometerHalf,
      text: "Real Feel",
      data: `${unit === "c" ? feelslike_c : feelslike_f}${unit === "c" ? "°C" : "°F"}`,
    },
    {
      id: 2,
      icon: MdOutlineWaterDrop,
      text: "Humidity",
      data: `${humidity}%`,
    },
    {
      id: 3,
      icon: FiWind,
      text: "Wind",
      data: `${unit === "c" ? wind_kph + " km/h" : wind_mph + "m/h"}`,
    },
    {
      id: 4,
      icon: TbGauge,
      text: "Pressure",
      data: `${unit === "c" ? pressure_mb + " mb" : pressure_in + "in"}`,
    },
    {
      id: 5,
      icon: IoRainyOutline,
      text: "Precipitation",
      data: `${unit === "c" ? precip_mm + " mm" : precip_in + "in"}`,
    },
  ];

  return (
    <div>
      <div className="forecast-title2">
        <p className="forecast-title-text2">{title}</p>
      </div>

      <hr className="forecast-divider2" />

        <div className="weather-details">
          {horizontalDetails.map(({ id, icon, text, data }) => (
            <RenderDetail key={id} icon={icon} text={text} data={data} />
          ))}
        </div>
    </div>
  );
};

export default WeatherDetails;
