import { useState } from "react";

type ImagePreviewProps = {
  src: "string";
  color: "string";
  onLoaded: () => {};
};

function ImagePreview(props: ImagePreviewProps) {
  const { src, color } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div style={{ backgroundColor: color }} />
      <div>{src && <img src={src} />}</div>
    </div>
  );
}

export default ImagePreview;
