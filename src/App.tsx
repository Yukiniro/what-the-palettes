import { StoreProvider } from "./context";
import GitHubCorners from "@uiw/react-github-corners";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <StoreProvider>
      <div className="text-center flex flex-col items-center justify-center">
        <GitHubCorners
          size={100}
          href="https://github.com/Yukiniro/what-the-palettes"
        />
        <Header />
        <Content />
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
