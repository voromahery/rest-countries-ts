import React, { useContext } from "react";
import Header from "./components/Header";
import "./App.css";
import AllCountries from "./components/AllCountries";
import { GlobalContext } from "./GlobalContext";
import styled from "styled-components";

function App() {
  const { mode } = useContext(GlobalContext);

  const Wrapper = styled.div`
    background-color: ${mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 100%)"};
    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
  `;
  return (
    <Wrapper className="App">
      <Header />
      <AllCountries />
    </Wrapper>
  );
}

export default App;
