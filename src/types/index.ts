import { DispatchWithoutAction } from "react";

type RGB = {
  r: number;
  g: number;
  b: number;
};

type RgbType = "r" | "g" | "b";

type GlobalState = {
  colors: string[];
  imageSrc: string;
};

type Action = {
  type: string;
  [prop: string]: any;
};

export { RGB, RgbType, GlobalState, Action };
