import { RGB, RgbType } from "../types";
import Color from "color";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const MAX_DEPTH = 2;

function getRGBs(imageData: ImageData): RGB[] {
  const list = [];
  const { data } = imageData;
  for (let i = 0; i < imageData.data.length; i += 4) {
    list.push({
      r: data[i],
      g: data[i + 1],
      b: data[i + 2],
    });
  }
  return list;
}

// https://en.wikipedia.org/wiki/Median_cut
function getColorTypeWithBiggestRange(list: RGB[]): RgbType {
  let rMax = Number.MIN_VALUE;
  let rMin = Number.MAX_VALUE;
  let gMax = Number.MIN_VALUE;
  let gMin = Number.MAX_VALUE;
  let bMax = Number.MIN_VALUE;
  let bMin = Number.MAX_VALUE;

  list.forEach(({ r, g, b }) => {
    rMax = Math.max(r, rMax);
    rMin = Math.min(r, rMin);
    gMax = Math.max(g, gMax);
    gMin = Math.min(g, gMin);
    bMax = Math.max(b, bMax);
    bMin = Math.min(b, bMin);
  });

  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;

  const maxRange = Math.max(rRange, gRange, bRange);
  if (maxRange === rRange) {
    return "r";
  } else if (maxRange === bRange) {
    return "g";
  } else {
    return "b";
  }
}

function medianCut(list: RGB[], depth: number): RGB[] {
  const length = list.length;
  if (depth === MAX_DEPTH || length === 0) {
    const reduceRGB = list.reduce(
      (preRGB, curRGB) => {
        return {
          r: preRGB.r + curRGB.r,
          g: preRGB.g + curRGB.g,
          b: preRGB.b + curRGB.b,
        };
      },
      {
        r: 0,
        g: 0,
        b: 0,
      }
    );

    return [
      {
        r: Math.round(reduceRGB.r / length),
        g: Math.round(reduceRGB.g / length),
        b: Math.round(reduceRGB.b / length),
      },
    ];
  }

  const rgbType = getColorTypeWithBiggestRange(list);
  const sortedList = [...list].sort((a, b) => a[rgbType] - b[rgbType]);
  const middleIndex = Math.floor(length / 2);
  return [
    ...medianCut(sortedList.slice(0, middleIndex), depth + 1),
    ...medianCut(sortedList.slice(middleIndex), depth + 1),
  ];
}

// https://en.wikipedia.org/wiki/Luma_(video)
function orderByLuminance(rgbValues: RGB[]) {
  const calculateLuminance = (p: RGB) => {
    return 0.2126 * p.r + 0.7152 * p.g + 0.0722 * p.b;
  };

  return rgbValues.sort((p1, p2) => {
    return calculateLuminance(p2) - calculateLuminance(p1);
  });
}

function getImageColors(image: HTMLImageElement): string[] {
  const { width, height } = image.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  const imageData = ctx.getImageData(0, 0, width, height);
  const rgbList = getRGBs(imageData);
  return orderByLuminance(medianCut(rgbList, 0)).map(({ r, g, b }) =>
    Color(`rgb(${r}, ${g}, ${b})`).hex()
  );
}

export { getImageColors };
