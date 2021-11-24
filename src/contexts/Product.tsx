import React, { useReducer, createContext } from "react";
import {
  Product,
  initialState,
  State as InitialStateType,
  Actions,
} from "../reducers/product";

export const ProductContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ProductContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(Product, initialState);
  const value = { state, dispatch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
