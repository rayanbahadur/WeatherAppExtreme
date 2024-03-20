/* TopButtons Component
This React component renders a set of buttons based on a list of extreme sport activities and their cities.
Each button, when clicked, changes the location of the weather app, so the user can see the weather and map of that location.*/
import React from "react";

const TopButtons = ({ setCity }) => {
    const cities = [
        {
            id: 1,
            title: "Surfing",
            title2: "Pupukea",
            location: "Pupukea",
        },
        {
            id: 2,
            title: "Mountaineering",
            title2: "Mount Everest",
            location: "Khumjung",
        },
        {
            id: 3,
            title: "Mountain Biking",
            title2: "Whistler",
            location: "Whistler",
        },
        {
            id: 4,
            title: "Extreme Sports Hub",
            title2: "Chamonix",
            location: "Chamonix, France ",
        },
        {
            id: 5,
            title: "Skydiving",
            title2: "Victoria Falls",
            location: "Victoria Falls",
        },
    ];

    return (
        <div className="top-buttons">
            {cities.map((city) => (
                <button
                    onClick={() => setCity(city.location)}
                    key={city.id}
                    className="top-buttons-bttn"
                >
                    <span className="loc-title">{city.title},</span>
                    <span className="loc-loc">{city.title2}</span>
                </button>
            ))}
        </div>
    );
};

export default TopButtons;