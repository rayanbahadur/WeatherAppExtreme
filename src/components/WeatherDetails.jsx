import React from "react";
import "./WeatherDetails.css"; // Import your CSS file
import { BsThermometerHalf } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

function RenderDetail(props) {
  const Icon = props.icon;
  return (
    <div className="detail-item2">
      <span className="detail-text2">{`${props.text}`}</span>
      <span className="detail-data2"><Icon className="detail-icon2" size={30} />{props.data}</span>
    </div>
  );
}

const WeatherDetails = ({
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
      data: `${unit === "c" ? feelslike_c : feelslike_f}${unit === "c" ? "°C" : "°F"}`,
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

  return (
    <div>
        <div className="weather-details">
          {horizontalDetails.map(({ id, icon, text, data }) => (
            <RenderDetail key={id} icon={icon} text={text} data={data} />
          ))}
        </div>
    </div>
  );
};

export default WeatherDetails;
