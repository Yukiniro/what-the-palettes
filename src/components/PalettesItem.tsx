import Color from "color";
import { useMemo } from "react";
import { fixed } from "bittydash";
import Tag from "./Tag";

type PalettesItemProps = {
  hex: string;
};

function PalettesItem(props: PalettesItemProps) {
  const { hex } = props;
  const color = useMemo(() => {
    return Color(hex);
  }, [hex]);
  const { rgb, hsl, cmyk } = useMemo(() => {
    const joinArr = (arr: number[]): string => {
      return arr.map(value => fixed(value, 1)).join(",");
    };
    return {
      rgb: joinArr(color.rgb().array()),
      hsl: joinArr(color.hsl().array()),
      cmyk: joinArr(color.cmyk().array()),
    };
  }, [color]);

  return (
    <div className="flex flex-col items-start">
      <div
        className="w-16 h-16 lg:w-16 lg:h-16 md:w-14 md:h-14 m-b-4 rounded-2 border-2 border-dark-100 border-solid shadow-light-100"
        style={{ backgroundColor: hex }}
      ></div>
      <Tag title="hex" text={hex} />
      <Tag title="rgb" text={rgb} />
      <Tag title="hsl" text={hsl} />
      <Tag title="cmyk" text={cmyk} />
    </div>
  );
}

export default PalettesItem;
