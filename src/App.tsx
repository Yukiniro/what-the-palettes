import ImagePreview from "./components/ImagePreview";
import Palettes from "./components/Patettes";
import { StoreProvider } from "./context";

function App() {
  return (
    <StoreProvider>
      <div className="w-screen h-screen text-center flex flex-col items-center justify-center">
        <h1 className="text-8 font-mono font-600 fixed top-12">
          What the palettes is?
        </h1>
        <div className="w-screen md:h-128 flex sm:flex-col md:flex-row">
          <ImagePreview />
          <Palettes />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
