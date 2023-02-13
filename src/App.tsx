import ImagePreview from "./components/ImagePreview";
import Palettes from "./components/Patettes";
import { StoreProvider } from "./context";
import { Button } from "antd";

function App() {
  return (
    <StoreProvider>
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="title text-16 bg-clip-text font-mono font-800 p-4 m-y-4 md:m-t-12 md:m-b-28">
          What the palettes is?
        </h1>
        <div className="lg:w-4/5 md:w-screen md:h-128 flex justify-between sm:flex-col md:flex-row">
          <ImagePreview />
          <Palettes />
        </div>
        <div className="fixed bottom-2">
          Created by{"  "}
          <Button
            type="link"
            href="https://github.com/Yukiniro"
            target="_black"
            className="p-0 text-4"
          >
            Yukiniro
          </Button>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
