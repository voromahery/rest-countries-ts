import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../GlobalContext";
import dayLight from "../icons/moon-solid.svg";
import nightTime from "../icons/moon-regular.svg";

export default function Header() {
  const { mode, dispatch } = useContext(GlobalContext);

  const darkMode = () => {
    dispatch({ type: "CHANGE_MODE", payload: !mode });
  };

  return (
    <header className={`${mode ? "light-header" : "dark-header"} header`}>
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
        )}{" "}
      </div>
    </header>
  );
}
