Extreme Weather App
Installation
To set up the app, you'll need to follow the following steps:

    Create react app (in terminal): npx create-react-app pick-a-name

    Open the app folder (code pick-a-name)

    Now change the contents of the src folder to our src contents

    Inside the public folder change the index.html file to our index.html file

    Run the command npm install

Install the necessary dependencies by running the following commands:

    npm install @auth0/auth0-react
    npm install leaflet
    npm install luxon
    npm install react
    npm install react-dom
    npm install react-icons
    npm install react-leaflet
    npm install react-toastify

For development dependencies, run:
    npm install @babel/plugin-proposal-private-property-in-object --save-dev

If the weather data does not load (10 day forecast will only show 3 days), it might be due to the expiration of the WeatherAPI trial period (03/05/2024). To fix this, create an account at WeatherAPI, obtain a new API key, and update the API_KEY in ./services/weatherService.js with the new key.

Running the App
    To launch the app locally:

    Start the app by running npm start.
    Access the app via a web browser at http://localhost:3000.
Notes
    This app uses WeatherAPI over OpenWeather because it provides extended features without requiring bank details for account creation.
