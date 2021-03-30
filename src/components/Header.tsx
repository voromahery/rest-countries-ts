import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";
import dayLight from "../icons/moon-solid.svg";
import nightTime from "../icons/moon-regular.svg";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding-left: 18px;
  padding-right: 18px;
  @media (min-width: 650px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export default function Header() {
  const { mode, dispatch } = useContext(GlobalContext);

  const darkMode = () => {
    dispatch({ type: "CHANGE_MODE", payload: !mode });
  };

  return (
    <HeaderContainer className={`${mode ? "light-header" : "dark-header"} header`}>
      <h3>
        <Link to="/">Where in the world?</Link>
      </h3>
      <div className="mode" onClick={darkMode}>
        {mode ? (
          <span>
            <img src={nightTime} alt="dark-moon" className="moon" />
            Light mode
          </span>
        ) : (
          <span>
            <img src={dayLight} alt="light-moon" className="moon" /> Dark mode
          </span>
        )}
      </div>
    </HeaderContainer>
  );
}
