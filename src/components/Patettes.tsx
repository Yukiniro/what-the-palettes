type PalettesProps = {
  hexs: string[];
};

type PalettesItemProps = {
  hex: string;
};

function PalettesItem(props: PalettesItemProps) {
  const { hex } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 m-b-4" style={{ backgroundColor: hex }}></div>
      <p>{hex}</p>
    </div>
  );
}

function Palettes(props: PalettesProps) {
  const { hexs } = props;
  return (
    <div className="w-1/2 flex justify-around items-center">
      {hexs.map(hex => PalettesItem({ hex }))}
    </div>
  );
}

export default Palettes;
