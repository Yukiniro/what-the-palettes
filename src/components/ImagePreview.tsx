import { useContext, useMemo, useRef, useState } from "react";
import constant from "../constant";
import { DispatchContext, StateContext } from "../context";
import { getImageColors } from "../util";

function ImagePreview() {
  const imageRef = useRef(null);
  const { imageSrc: src, colors } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const [isMouseIn, setIsMouseIn] = useState(false);

  const onImageLoad = () => {
    dispatch({
      type: constant.SET_COLORS,
      colors: getImageColors(imageRef.current),
    });
  };

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e: Event) => {
      input.onchange = null;
      const src = URL.createObjectURL((e.target as HTMLInputElement).files[0]);
      dispatch({
        type: constant.SET_IMAGE_SRC,
        src,
      });
    };
    input.click();
  };

  const blurStyle = useMemo(() => {
    return isMouseIn
      ? {
          filter: "blur(4px)",
        }
      : {};
  }, [isMouseIn]);

  return (
    <div
      className="w-1/1 mb-12 md:mb-0 md:w-1/2 flex-center border border-solid border-gray-300"
      style={{ backgroundColor: colors[0] }}
    >
      {src && (
        <img
          onLoad={onImageLoad}
          ref={imageRef}
          onClick={handleImageClick}
          onMouseEnter={() => setIsMouseIn(true)}
          onMouseLeave={() => setIsMouseIn(false)}
          style={blurStyle}
          className="w-4/5 h-4/5 object-scale-down rounded-lg cursor-pointer"
          src={src}
        />
      )}
      {isMouseIn && (
        <div className="absolute pointer-events-none text-8 bg-gray-200 p-x-6 p-y-4 rounded-4">
          Upload Image
        </div>
      )}
    </div>
  );
}

export default ImagePreview;
