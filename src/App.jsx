import React, { useEffect, useState } from "react";
import TopButtons from "./components/topButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import DashboardImage from "./assets/Dashboard.png";
import MapImage from "./assets/Map.png";
import DownloadImage from "./assets/Download.png";
import SettingsImage from "./assets/Settings.png";
import ShareImage from "./assets/Share.png";
import LogoutImage from "./assets/Logout.png";
import SunriseImage from "./assets/Sunrise.svg";

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
            {weather && (
                <>
                  <TimeAndLocation weather={weather} />
                </>
            )} 
          </div>
          <section id="main">
            <div id="overview">
              A
              
            </div>
            <div id="info">
              <div class="infoTile">
                <p class="infoTitle">Sunrise</p>
                <div class="infoContent">
                  <img src= {SunriseImage} alt="sunrise icon" id="infoIcon" />
                  <p class="infoTime">04:20</p>
                </div>
              </div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
              <div class="infoTile">B</div>
            </div>
            <div id="forecast">C</div>
            <div id="graph">D</div>
            <div id="rain">E</div>
            <div id="future">F</div>
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
