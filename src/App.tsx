import React, { useContext } from "react";
import Header from "./components/Header";
import "./App.css";
import AllCountries from "./components/AllCountries";
import { GlobalContext } from "./GlobalContext";
import styled from "styled-components";

function App() {
  const { mode } = useContext(GlobalContext);

  //  const AppWrapper = styled.div`
  //    background-color: ${mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  //    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
  //  `;
  return (
    <div className="App">
      <Header />
      <AllCountries />
    </div>
  );
}

export default App;
