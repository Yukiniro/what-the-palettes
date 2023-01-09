import { createContext } from "react";
import { GlobalState } from "../types";

const initGlobalState: GlobalState = {
  colors: ["#F0FFFF", "#FF00FF", "#00FF00"],
  imageSrc: "/preview.jpeg",
};

const GlobalContext = createContext(initGlobalState);

export { GlobalContext, initGlobalState };