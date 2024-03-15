import React from "react";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

function RenderDetail(props) {
    const Icon = props.icon;
    return (
      <div className="detail-item">
        <Icon className="detail-icon" size={40} />
        <span className="detail-text">{`${props.text} :`}</span>
        <span className="detail-data">{props.data}</span>
      </div>
    );
  }
  
  function RenderVerticalDetail(props) {
    const Icon = props.icon;
    return (
      <div className="detail-item">
        <Icon size={60} />
        <p className="detail-text">{props.text}</p>
        <p className="detail-data">{props.data}</p>
      </div>
    );
  }
  
  const Details = ({
    title,
    unit,
    weather: {
      sunrise,
      sunset,
      moonrise,
      moonset,
    },
  }) => {

    const verticalDetails = [
      {
        id: 1,
        icon: WiSunrise,
        text: "Sunrise",
        data: sunrise,
      },
      {
        id: 2,
        icon: WiSunset,
        text: "Sunset",
        data: sunset,
      },
      {
        id: 3,
        icon: WiMoonrise,
        text: "Moonrise",
        data: moonrise,
      },
      {
        id: 4,
        icon: WiMoonset,
        text: "Moonset",
        data: moonset,
      },
    ];
  
    return (
      <div>
        <div className="forecast-title2">
          <p className="forecast-title-text2">{title}</p>
          </div>
          
          <hr className="forecast-divider" />

          <div className="vertical-details">
            {verticalDetails.map(({ id, icon, text, data }) => (
              <RenderVerticalDetail key={id} icon={icon} text={text} data={data} />
            ))}
          </div>
        </div>
    );
  };
  
  export default Details;
  