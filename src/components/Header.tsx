import React, { useContext } from "react";
import { GlobalContext } from "./../GlobalContext";

export default function Header() {
  const { mode, dispatch } = useContext(GlobalContext);

  const darkMode = () => {
    dispatch({ type: "CHANGE_MODE", payload: !mode });
  };

  return (
    <header className={`${mode ? "light-header" : "dark-header"} header`}>
      <h3>Where in the world?</h3>
      <div className="mode" onClick={darkMode}>{mode ? "Light mode" : "Dark mode"} </div>
    </header>
  );
}
