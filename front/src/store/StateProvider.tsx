import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StateContext = createContext([initialState, () => initialState]);

export const StateProvider = ({
  reducer,
  children,
  initialState,
}: {
  reducer: any;
  children: React.ReactNode;
  initialState: any;
}) => {
  const [state, dispatch]: any = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
