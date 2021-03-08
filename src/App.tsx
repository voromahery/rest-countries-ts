import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import AllCountries from "./components/AllCountries";

function App() {
  return (
    <div className="App">
      <Header />
      <AllCountries />
    </div>
  );
}

export default App;
