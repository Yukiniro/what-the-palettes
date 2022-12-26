import { useState } from "react";

type ImagePreviewProps = {
  src?: string;
  color?: string;
};

function ImagePreview(props: ImagePreviewProps) {
  const { src, color } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="w-1/2 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {src && (
        <img
          className="w-4/5 object-contain rounded-lg border-width-6 border-solid border-light-700"
          src={src}
        />
      )}
    </div>
  );
}

export default ImagePreview;
