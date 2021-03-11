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
  `;

  const darkMode = () => {
    dispatch({ type: "CHANGE_MODE", payload: !mode });
  };

  return (
    <Container>
      <h3>Where in the world?</h3>
      <div onClick={darkMode}>{mode ? "Dark mode" : "Light mode"} </div>
    </Container>
  );
}
