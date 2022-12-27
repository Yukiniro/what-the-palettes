import { useState } from "react";

type ImagePreviewProps = {
  src?: string;
  color?: string;
};

function ImagePreview(props: ImagePreviewProps) {
  const { src, color } = props;

  return (
    <div
      className="w-1/1 mb-12 md:mb-0 md:w-1/2 flex-center"
      style={{ backgroundColor: color }}
    >
      {src && (
        <img className="w-4/5 h-4/5 object-scale-down rounded-lg" src={src} />
      )}
    </div>
  );
}

export default ImagePreview;
