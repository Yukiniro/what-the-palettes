import { useState } from "react";
import { ReactComponent as LogoSvg } from "./icon/logo.svg";
import { ReactComponent as FaviconSvg } from "./icon/favicon.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-screen h-screen bg-gray-800 text-center flex flex-col items-center justify-center">
      <h1 className="text-white text-20 font-mono font-600">Hello World</h1>
      <div className="flex p-14 w-110 justify-between items-center">
        <LogoSvg className="w-60 h-60" />
        <FaviconSvg className="w-40 h-40" />
      </div>
      <p>
        <button
          className="cursor-pointer text-6 px-6 py-2 rounded-4 border-none"
          onClick={() => setCount(count => count + 1)}
        >
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
