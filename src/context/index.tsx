import { createContext, useReducer } from "react";
import constant from "../constant";
import { Action, GlobalState } from "../types";

function reducer(state: GlobalState, action: Action) {
  switch (action.type) {
    case constant.SET_COLORS:
      return {
        ...state,
        colors: action.colors,
      };
    case constant.SET_IMAGE_SRC:
      return {
        ...state,
        imageSrc: action.src,
      };
    default:
      return state;
  }
}

const StateContext = createContext({} as unknown as GlobalState);
const DispatchContext = createContext(null);

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    colors: ["#F0FFFF", "#FF00FF", "#00FF00"],
    imageSrc: "/preview.jpeg",
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export { StoreProvider, DispatchContext, StateContext };
