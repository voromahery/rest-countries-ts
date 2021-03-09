import React, { createContext, useReducer, useEffect } from "react";

let initialState = {
  response: [],
  isLoading: true,
  error: null,
};

type State = {
  response?: Response;
  isLoading: boolean;
  error: string;
};

// type Action = {
//   type: "LOADING" | "RESOLVED" | "ERROR";
//   response: "RESOLVED";
//   isLoading: "LOADING";
//   error: "ERROR";
// };

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
