import './App.css';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'berlin'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query. units}).then(
        (data) => {
          setWeather(data);
        });
    };

    fetchWeather();
  }, [query, units]);


  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q:'London'});
    console.log(data);
  };

  fetchWeather();

  return (
    <div className= "mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title='Hourly Forecast' items={weather.hourly}/>
          <Forecast title='Daily Forecast' items={weather.daily}/>
        </div>
      )}
    </div>
  );
}

export default App;
