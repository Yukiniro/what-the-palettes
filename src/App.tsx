import { useState } from "react";
import { ReactComponent as LogoSvg } from "./icon/logo.svg";
import { ReactComponent as FaviconSvg } from "./icon/favicon.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-screen h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-8 font-mono font-600 fixed top-12">What the palettes is?</h1>
      <div className="bg-dark-100 w-screen h-128">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
