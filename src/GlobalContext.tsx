import React, { createContext, useState, useEffect } from "react";

let initialState = {
  data: [],
};

export const GlobalContext = createContext({});

const GlobalProvider: React.FC = ({ children }) => {
  const [countryData, setCountryData] = useState(initialState.data);
  const link = `https://restcountries.eu/rest/v2/all`;

  const fetchData = async () => {
    const response = await fetch(link);
    const data = await response.json();
    setCountryData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ countryData, setCountryData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
