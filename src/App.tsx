import ImagePreview from "./components/ImagePreview";
import Palettes from "./components/Patettes";
import { StoreProvider } from "./context";

function App() {
  return (
    <StoreProvider>
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="title text-16 bg-clip-text font-mono font-800 p-4 m-y-4 md:m-t-12 md:m-b-28">
          What the palettes is?
        </h1>
        <div className="lg:w-4/5 md:w-screen md:h-128 flex sm:flex-col md:flex-row">
          <ImagePreview />
          <Palettes />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
