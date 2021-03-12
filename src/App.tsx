import React, { useContext } from "react";
import Header from "./components/Header";
import "./App.css";
import AllCountries from "./components/AllCountries";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { mode } = useContext(GlobalContext);

  return (
    <div className={`${mode ? "light-mode" : "dark-mode"}`}>
      <Header />
      <AllCountries />
    </div>
  );
}

export default App;
