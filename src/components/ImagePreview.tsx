import { useContext, useRef } from "react";
import constant from "../constant";
import { DispatchContext, StateContext } from "../context";
import { getImageColors } from "../util";

function ImagePreview() {
  const imageRef = useRef(null);
  const { imageSrc: src, colors } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const onImageLoad = () => {
    dispatch({
      type: constant.SET_COLORS,
      colors: getImageColors(imageRef.current),
    });
  };

  return (
    <div
      className="w-1/1 mb-12 md:mb-0 md:w-1/2 flex-center"
      style={{ backgroundColor: colors[0] }}
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
