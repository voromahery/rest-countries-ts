import React, { createContext, useReducer, useEffect } from "react";

type Country = {
  [
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: [
      {
        code: string;
        name: string;
        symbol: string;
      }
    ],
    languages: [
      {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
      }
    ],
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
    },
    flag: string,
    regionalBlocs: [
      {
        acronym: string;
        name: string;
        otherAcronyms: string[];
        otherNames: string[];
      }
    ],
    cioc: string,
  ];
};

let initialState: Country = [
  {
    name: "",
    topLevelDomain: [],
    alpha2Code: "",
    alpha3Code: "",
    callingCodes: [],
    capital: "",
    altSpellings: [],
    region: "",
    subregion: "",
    population: 0,
    latlng: [],
    demonym: "",
    area: [],
    gini: [],
    timezones: [],
    borders: [],
    nativeName: "",
    numericCode: "",
    currencies: [
      {
        code: "",
        name: "",
        symbol: "",
      },
    ],
  },
  // isLoading: true,
  // error: null,
];

type State = {
  response?: Country[];
  isLoading: boolean;
  error: string;
};

type Action = { type: "LOADING" } | { type: "RESOLVED" } | { type: "ERROR" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "RESOLVED":
      return { ...state, response: action };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        response: null,
        error: action,
      };
    default:
      return state;
  }
}

export const GlobalContext = createContext(initialState);

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const link = `https://restcountries.eu/rest/v2/all`;

  useEffect(() => {
    let isCurrent: boolean = true;
    // dispatch({ type: "LOADING", isLoading });
    fetch(link)
      .then((response) => response.json())
      .then((json) => {
        if (isCurrent) {
          dispatch({ type: "RESOLVED", response: json });
        }
      });
    // .catch((error) => {
    //   dispatch({ type: "ERROR", error });
    // });
    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ state: state.response, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;