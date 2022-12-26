import ImagePreview from "./components/ImagePreview";
import Palettes from "./components/Patettes";

function App() {
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-8 font-mono font-600 fixed top-12">
        What the palettes is?
      </h1>
      <div className="w-screen h-128 flex">
        <ImagePreview color="red" src="/preview.jpeg" />
        <Palettes hexs={["#F0FFFF", "#FF00FF", "#00FF00"]} />
      </div>
    </div>
  );
}

export default App;
