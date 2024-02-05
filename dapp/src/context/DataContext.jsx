/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "new-data":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      throw new Error("Action Unknown");
  }
}

const DataProvider = ({ children }) => {
  const [{ data }, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider
      value={{
        data,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("Context was read outside the provider scope");

  return context;
}

export { DataProvider, useData };
