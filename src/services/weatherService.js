import { DateTime } from "luxon";

// API Key to access the WeatherAPI
const API_KEY = "c5314d8921e04b809d4132226241404";

// URL for WeatherAPI
const BASE_URL = "http://api.weatherapi.com/v1";

// Used to fetch data from the API
const fetchData = (apiMethod, searchParams) => {
  const url = new URL(BASE_URL + "/" + apiMethod + ".json");
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });

  // Fetches data from the URL
  return fetch(url).then((res) => res.json());
};

// Function used to format the weather data
export const getFormattedWeatherData = async (city) => {
  const weatherData = await fetchData("forecast", {
    q: city,
    days: 10,
  });

  const formattedWeather = formatForecastWeather(weatherData);
  const weatherAlerts = formatWeatherAlerts(weatherData.alerts);

  return { ...formattedWeather, alerts: weatherAlerts };
};

// Formats forecast weather data
const formatForecastWeather = (data) => {
  // Gathers fetched data
  const {
    location: {
      name: loc_name,
      country: loc_country,
      lat: loc_lat,
      lon: loc_lon,
      localtime_epoch: loc_epoch,
      tz_id: loc_tz,
    },
    forecast: { forecastday },
    current: {
      condition: { icon: condition_icon, text: condition_text },
      feelslike_c,
      feelslike_f,
      humidity,
      temp_c,
      temp_f,
      wind_kph,
      wind_mph,
      pressure_mb,
      pressure_in,
      precip_mm,
      precip_in,
      is_day,
    },
  } = data;

  // Formats local datetime
  const locDateTime = formatToLocalTime(loc_epoch, loc_tz);

  // Returns the formatted weather data
  return {
    loc_name,
    loc_country,
    loc_lat,
    loc_lon,
    locDateTime,
    condition_text,
    condition_icon: formatIconUrl(condition_icon),
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    pressure_mb,
    pressure_in,
    precip_mm,
    precip_in,
    is_day,
    ...formatAstroData(forecastday),
    dailyForecast: formatDailyForecast(forecastday, loc_tz),
    hourlyForecast: formatHourlyForecast(forecastday, loc_epoch, loc_tz),
  };
};

const formatWeatherAlerts = (alertsData) => {
  if (!alertsData || !alertsData.alert) return [];

  return alertsData.alert.map(alert => ({
    headline: alert.headline,
    severity: alert.severity,
    urgency: alert.urgency,
    areas: alert.areas,
    event: alert.event,
    effective: alert.effective,
    expires: alert.expires,
    description: alert.desc,
    instruction: alert.instruction,
  }));
};


// Function used to format the icon URL
const formatIconUrl = (iconUrl) => {
  return "https:" + iconUrl;
};

// Function used to format hourly forecast data
const formatHourlyForecast = (forecast, loc_epoch, timezone) => {
  // Gathers forecast data and filters it based on local epoch time
  let hourlyForecast = forecast.slice(0, 2).map(({ hour }) => hour);
  hourlyForecast = [...hourlyForecast[0], ...hourlyForecast[1]];
  hourlyForecast = hourlyForecast.filter(
    (forecast) => forecast.time_epoch > loc_epoch
  );
  hourlyForecast = hourlyForecast
    .slice(1, 8)
    .map(({ temp_c, temp_f, time_epoch, condition: { icon } }) => {
      return {
        temp_c,
        temp_f,
        icon: formatIconUrl(icon),
        title: formatToLocalTime(time_epoch, timezone, "hh:mm a"),
      };
    });
  // Returns the formatted forecast data
  return hourlyForecast;
};

// Function used to formal the daily forecast data
const formatDailyForecast = (forecast, timezone) => {
  const dailyForecast = forecast.map(({ date_epoch, day }) => {
    return {
      title: formatToLocalTime(date_epoch, timezone, "ccc"),
      temp_c: day.avgtemp_c,
      temp_f: day.avgtemp_f,
      icon: formatIconUrl(day.condition.icon),
    };
  });
  // Returns formatted daily forecast data
  return dailyForecast;
};

// Function used to format the astronomical data
const formatAstroData = (forecast) => {
  const {
    astro: { sunrise, sunset, moonrise, moonset },
  } = forecast[0];
  // Returns formatted astronomical data
  return { sunrise, sunset, moonrise, moonset };
};

// Function used to convert the epoch time to local time
const formatToLocalTime = (
  epoch,
  timezone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(epoch).setZone(timezone).toFormat(format);
};

