import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-fslnijx3wjm73mvt.us.auth0.com";
const clientId = "vsUgVUkfZf4gknKegoO9pDRuly2VaYOB";

ReactDOM.createRoot(
    document.getElementById("root")).render(
        <Auth0Provider
            domain = {domain}
            clientId = {clientId}
            redirectUri = {window.location.origin}
        >
            <App />
        </Auth0Provider>   
    );
