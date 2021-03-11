import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "./../GlobalContext";

export default function Header() {
  const { mode, dispatch } = useContext(GlobalContext);

  const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${mode ? " hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
    color: ${mode ? "hsl(0, 0%, 100%)" : "black"};
    box-shadow: 0px 0px 4px ${mode?"hsl(207, 26%, 17%)":"hsl(0, 0%, 52%)"};
  `;

  const Mode = styled.div`
    cursor: pointer;
  `;

  const darkMode = () => {
    dispatch({ type: "CHANGE_MODE", payload: !mode });
  };

  return (
    <Container>
      <h3>Where in the world?</h3>
      <Mode onClick={darkMode}>{mode ? "Light mode" : "Dark mode"} </Mode>
    </Container>
  );
}
