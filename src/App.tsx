import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import Palettes from "./components/Patettes";

function App() {
  const [colors, setColors] = useState(["#F0FFFF", "#FF00FF", "#00FF00"]);
  const [imageSrc, setImageSrc] = useState("/preview.jpeg");
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-8 font-mono font-600 fixed top-12">
        What the palettes is?
      </h1>
      <div className="w-screen md:h-128 flex sm:flex-col md:flex-row">
        <ImagePreview setColors={setColors} color={colors[0]} src={imageSrc} />
        <Palettes hexs={colors} />
      </div>
    </div>
  );
}

export default App;
