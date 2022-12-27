import Color from "color";
import { useMemo } from "react";
import { fixed } from "bittydash";

type PalettesProps = {
  hexs: string[];
};

type PalettesItemProps = {
  hex: string;
};

type TagProps = {
  title: string;
  text: string;
};

function Tag(props: TagProps) {
  const { title, text } = props;
  return (
    <div className="text-left p-2 mt-2 mb-2 w-1/1 rounded-2 hover:bg-light-600 cursor-pointer">
      <p className="text-size-4 uppercase mb-2">{title}</p>
      <p className="text-size-2">{text}</p>
    </div>
  );
}

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
        className="w-16 h-16 m-b-4 rounded-2 border-2 border-dark-100 border-solid shadow-light-100"
        style={{ backgroundColor: hex }}
      ></div>
      <Tag title="hex" text={hex} />
      <Tag title="rgb" text={rgb} />
      <Tag title="hsl" text={hsl} />
      <Tag title="cmyk" text={cmyk} />
    </div>
  );
}

function Palettes(props: PalettesProps) {
  const { hexs } = props;
  return (
    <div className="w-1/1 md:w-1/2 flex justify-around items-center">
      {hexs.map(hex => PalettesItem({ hex }))}
    </div>
  );
}

export default Palettes;
