import { DateTime } from "luxon";

const API_KEY = '23ba4daaf93ee115a0ab849a158fe6c5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL (BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, humidity, temp_min, temp_max},
        name,
        dt, 
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
    } = data

    const {main: details, icon} = weather[0]
    return {lat, lon, temp, feels_like, humidity, temp_min, temp_max, name, dt, country, sunrise, sunset, details, icon, speed}
}
const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    if (daily) {
        daily = daily.slice(1,6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, 'ccc'),
                temp: d.temp.day,
                icon: d.weather[0].icon
            }
        }); //Shows the next 5 days
    }
    if (hourly){
        hourly = hourly.slice(1,6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
                temp: d.temp,
                icon: d.weather[0].icon
            }
        }); //Shows the next 5 hours
    }
return {timezone, daily, hourly};
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);
    const {lon, lat} = formattedCurrentWeather;
    const formattedForecastWeather = await getWeatherData('onecall', {lat, lon, exclude:'current, minutely, alerts', units:searchParams.units}).then(formatForecastWeather);

    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = (secs, zone, format = "cccc, dd, LLL, yyyy' | Local time: 'hh:mm:ss a") => DateTime.fromSeconds(secs, {zone}).toFormat(format);
const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormattedWeatherData;
export {formatToLocalTime, iconUrlFromCode};