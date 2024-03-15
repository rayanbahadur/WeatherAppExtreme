import React, { useEffect, useState } from "react";
import TopButtons from "./components/topButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import WeatherDetails from "./components/WeatherDetails";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import ForecastDaily from "./components/ForecastDaily";
import DashboardImage from "./assets/Dashboard.png";
import MapImage from "./assets/Map.png";
import DownloadImage from "./assets/Download.png";
import SettingsImage from "./assets/Settings.png";
import ShareImage from "./assets/Share.png"
import LogoutImage from "./assets/Logout.png"

import { getFormattedWeatherData } from "./services/weatherService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import the CSS file
import "./App.css";

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

  const formatBackground = (weather) => {
    if (!weather) return "overview";
    return weather.is_day
      ? "day-background"
      : "night-background";
  };

  return (
    <div>
      <body>
        <nav>
          <ul id="menu">
            <li id="hamburger">
              <div id="topLine"></div>
              <div id="midLine"></div>
              <div id="bottomLine"></div>
            </li>
            <li class="menuItems"><a href="#"><img src={DashboardImage} alt="" /><div>Dashboard</div></a></li>
            <li class="menuItems"><a href="#"><img src={MapImage} alt="" /><div>Map</div></a></li>
            <li class="menuItems"><a href="#"><img src={DownloadImage} alt="" /><div>Offline</div></a></li>
            <li class="menuItems"><a href="#"><img src={SettingsImage} alt="" /><div>Settings</div></a></li>
          </ul>
          <ul id="extra">
            <li class="menuItems"><a href="#"><img src={DownloadImage} alt="" /><div>Share</div></a></li>
            <li class="menuItems"><a href="#"><img src={SettingsImage} alt="" /><div>Logout</div></a></li>
          </ul>
        </nav>
        <article>
          <div id="topBar">
            {/* <div>Welcome!</div> */}
            {/* <TopButtons setCity={setCity} /> */}
            <Inputs setCity={setCity} unit={unit} setUnit={setUnit} />
          </div>
          <section id="main">
            <div class={`background ${formatBackground(weather)}`}>
              {weather && (
                <>
                  <TimeAndLocation weather={weather} />
                  <TemperatureAndDetails weather={weather} unit={unit} />
                </>
              )}
            </div>
            <div id="info"></div>
            <div id="forecast">
              {weather && (
                  <>
                    <Details weather={weather} unit={unit}/>
                  </>
                )}
            </div>
            <div id="hours">
            {weather && (
                <Forecast
                  // title="hourly forecast"
                  unit={unit}
                  forecast={weather.hourlyForecast}
                />
              )}
            </div>
            <div id="someInfo">
              {weather && (
                <>
                  <WeatherDetails weather={weather} unit={unit} />
                </>
              )}
            </div>
            <div id="future">
              {weather && (
                <ForecastDaily
                  title="8 Days"
                  unit={unit}
                  forecast={weather.dailyForecast}
                />
              )}  
            </div>
          </section>
        </article>
      </body>
    </div>
  );

  
  // const formatBackground = () => {
  //   if (!weather) return "from-cyan-700 to-blue-700";
  //   return weather.is_day
  //     ? "from-yellow-700 to-orange-700"
  //     : "from-cyan-700 to-blue-700";

  // };
  // return (
  //   <div className={`app-container ${formatBackground()}`}>
  //     <TopButtons setCity={setCity} />
  //     <Inputs setCity={setCity} unit={unit} setUnit={setUnit} />

  //     {weather && (
  //       <>
  //         <TimeAndLocation weather={weather} />
  //         <TemperatureAndDetails weather={weather} unit={unit} />

  //         <Forecast
  //           title="hourly forecast"
  //           unit={unit}
  //           forecast={weather.hourlyForecast}
  //         />
  //         <Forecast
  //           title="daily forecast"
  //           unit={unit}
  //           forecast={weather.dailyForecast}
  //         />
  //       </>
  //     )}

  //     {/* <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} /> */}
  //   </div>
  // );
};

export default App;
