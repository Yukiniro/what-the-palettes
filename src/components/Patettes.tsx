import { useContext } from "react";
import { StateContext } from "../context";
import PalettesItem from "./PalettesItem";

function Palettes() {
  const { colors } = useContext(StateContext);
  return (
    <div className="w-1/1 md:w-2/5 flex justify-around items-center">
      {colors.map(color => (
        <PalettesItem key={color} hex={color} />
      ))}
    </div>
  );
}

export default Palettes;
