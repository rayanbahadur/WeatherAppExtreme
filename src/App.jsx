import React, { useEffect, useState } from "react";
import TopButtons from "./components/topButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import { getFormattedWeatherData } from "./services/weatherService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "./components/Map";

const App = () => {
  const [city, setCity] = useState("Whitechapel");
  const [unit, setUnit] = useState("c");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(city).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [city, unit]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    return weather.is_day
      ? "from-yellow-700 to-orange-700"
      : "from-cyan-700 to-blue-700";
  };

  return (
    <div
      className={`max-w-screen-md mx-auto mt-4 py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl shadow-gray-400 rounded-lg`}
    >
      <TopButtons setCity={setCity} />
      <Inputs setCity={setCity} unit={unit} setUnit={setUnit} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} unit={unit} />

          <Forecast
            title="hourly forecast"
            unit={unit}
            forecast={weather.hourlyForecast}
          />
          <Forecast
            title="daily forecast"
            unit={unit}
            forecast={weather.dailyForecast}
          />
          <Map weather = {weather}/>
        </>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
};

export default App;
