import ClipboardJS from "clipboard";
import { useEffect, useMemo, useRef, useState } from "react";
import { message } from "antd";

type TagProps = {
  title: string;
  text: string;
  color: string;
};

const copyText = "Copied";

function Tag(props: TagProps) {
  const { title, text, color } = props;
  const [style, setStyle] = useState({ borderColor: "transparent" });
  const targetRef = useRef(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(targetRef.current, {
      text: () => {
        if (title === "hex") {
          return text;
        } else {
          return `${title}(${text})`;
        }
      },
    });

    clipboard.on("success", e => {
      message.open({
        content: `${e.text} ${copyText}`,
        type: "info",
      });
    });

    clipboard.on("error", e => {
      message.open({
        content: `${e.text} ${copyText}`,
        type: "error",
      });
    });

    return () => {
      clipboard.destroy();
    };
  }, [title, text]);

  const mouseEnter = () => setStyle({ borderColor: color });
  const mouseLeave = () => setStyle({ borderColor: "transparent" });

  return (
    <div
      ref={targetRef}
      style={style}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="text-left p-2 mt-2 mb-2 w-1/1 rounded-2 cursor-pointer transition-all transition-300 border-solid border-2"
    >
      <p className="text-size-4 uppercase mb-2">{title}</p>
      <p className="text-size-2">{text}</p>
    </div>
  );
}

export default Tag;
