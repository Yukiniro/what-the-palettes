import { useRef } from "react";
import { getImageColors } from "../util";

type ImagePreviewProps = {
  src?: string;
  color?: string;
  setColors?: (colors: string[]) => void;
};

function ImagePreview(props: ImagePreviewProps) {
  const { src, color, setColors } = props;
  const imageRef = useRef(null);

  const onImageLoad = () => {
    setColors(getImageColors(imageRef.current).slice(0, 3));
  };

  return (
    <div
      className="w-1/1 mb-12 md:mb-0 md:w-1/2 flex-center"
      style={{ backgroundColor: color }}
    >
      {src && (
        <img
          onLoad={onImageLoad}
          ref={imageRef}
          className="w-4/5 h-4/5 object-scale-down rounded-lg"
          src={src}
        />
      )}
    </div>
  );
}

export default ImagePreview;
