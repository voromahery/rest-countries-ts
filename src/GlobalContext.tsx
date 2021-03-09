import React, { createContext, useReducer, useEffect } from "react";
type State = {
  response: any;
  // isLoading: boolean;
  // error: string;
};

let initialState: State = {
  response: [],
  // isLoading: false,
  // error: "",
};

type Country = [
  {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: [
      {
        code: string;
        name: string;
        symbol: string;
      }
    ];
    languages: [
      {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
      }
    ];
    translations: {
      de: string;
      es: string;
      fr: string;
      ja: string;
      it: string;
      br: string;
      pt: string;
      nl: string;
      hr: string;
      fa: string;
    };
    flag: string;
    regionalBlocs: [
      {
        acronym: string;
        name: string;
        otherAcronyms: string[];
        otherNames: string[];
      }
    ];
    cioc: string;
  }
];

type Action =
  | { type: "LOADING"; payload: boolean }
  | { type: "RESOLVED"; payload: Country[] }
  | { type: "ERROR"; payload: string };

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    // case "LOADING":
    //   return { ...state, isLoading: action.payload };
    case "RESOLVED":
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    // case "ERROR":
    //   return {
    //     ...state,
    //     isLoading: false,
    //     response: null,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
}

export const GlobalContext = createContext(initialState);

const GlobalProvider: React.FC = ({ children }) => {
  const link = `https://restcountries.eu/rest/v2/all`;
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData() {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
    
    dispatch({ type: "RESOLVED", payload: data });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ response: state.response }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
