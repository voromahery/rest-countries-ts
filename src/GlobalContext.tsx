import React, { createContext, useReducer, useEffect } from "react";

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

let initialCountry: Country = [
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
    area: 0,
    gini: 0,
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
    languages: [
      {
        iso639_1: "",
        iso639_2: "",
        name: "",
        nativeName: "",
      },
    ],
    translations: {
      de: "",
      es: "",
      fr: "",
      ja: "",
      it: "",
      br: "",
      pt: "",
      nl: "",
      hr: "",
      fa: "",
    },
    flag: "",
    regionalBlocs: [
      {
        acronym: "",
        name: "",
        otherAcronyms: [],
        otherNames: [],
      },
    ],
    cioc: "",
  },
];



interface State {
  response?: Country[];
  isLoading: boolean;
  error: string;
}

type Action =
  | { type: "LOADING"; isLoading: boolean }
  | { type: "RESOLVED"; response: Country[] }
  | { type: "ERROR"; error: string };

  let initialState:State= {
    response: [],
    isLoading: false,
    error: "",
  };
  

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "RESOLVED":
      return {
        ...state,
        isLoading: false,
        response: action.response,
        error: null,
      };
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
  const link = `https://restcountries.eu/rest/v2/all`;
  const [state, dispatch] = useReducer(reducer, initialState)

  async function fetchData() {
    const response = await fetch(link);
    const data = await response.json();
    // dispatch({ type: "RESOLVED", response: data });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ state: state.response, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
