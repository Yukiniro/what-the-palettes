import ImagePreview from "./ImagePreview";
import Palettes from "./Patettes";

function Content() {
  return (
    <div className="lg:w-4/5 md:w-screen md:h-128 flex justify-between sm:flex-col md:flex-row sm:p-b-16 p-0">
      <ImagePreview />
      <Palettes />
    </div>
  );
}

export default Content;
