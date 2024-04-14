
https://github.com/rayanbahadur/weather-app-extreme/assets/118920618/98c073e0-8a03-491c-a4b8-5d291339015b


# Extreme Weather App

## Installation

To set up the app, you'll need to follow the following steps:

1. Create react app (in terminal): `npx create-react-app pick-a-name`
2. Open the app folder (`code pick-a-name`)
3. Now change the contents of the src folder to our src contents
4. Inside the public folder change the `index.html` file to our `index.html` file

5. Run the command `npm install`
6.  Install the necessary dependencies by running the following commands:
  ```
  npm install @auth0/auth0-react
  npm install leaflet
  npm install luxon
  npm install react
  npm install react-dom
  npm install react-icons
  npm install react-leaflet
  npm install react-toastify
  ```
7. For development dependencies, run:
  ```
  npm install @babel/plugin-proposal-private-property-in-object --save-dev
  ```

- If the weather data does not load (10 day forecast will only show 3 days), it might be due to the expiration of the WeatherAPI trial period (03/05/2024). To fix this, create an account at [WeatherAPI](https://www.weatherapi.com/), obtain a new API key, and update the `API_KEY` in `./services/weatherService.js` with the new key.

## Running the App

To launch the app locally:

1. Start the app by running `npm start`.
2. Access the app via a web browser at `http://localhost:3000`.

## Notes

- This app uses [WeatherAPI](https://www.weatherapi.com/) over [OpenWeather](https://openweathermap.org/) because it provides extended features without requiring bank details for account creation.

--- 
