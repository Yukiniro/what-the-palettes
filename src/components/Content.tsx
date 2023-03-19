import ImagePreview from "./ImagePreview";
import Palettes from "./Patettes";

function Content() {
  return (
    <div className="lg:w-4/5 md:w-screen md:h-128 flex justify-between sm:flex-col md:flex-row">
      <ImagePreview />
      <Palettes />
    </div>
  );
}

export default Content;
