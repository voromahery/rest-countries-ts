import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalProvider from "./GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// PLAN:
// - API: Fetching
// - Map 8 countries
// - Use ReactRouter: To get access to the country details.

// - Fetch by border country
// - A new API

reportWebVitals();
