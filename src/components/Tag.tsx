import ClipboardJS from "clipboard";
import { useEffect, useRef } from "react";
import { message } from "antd";

type TagProps = {
  title: string;
  text: string;
};

function Tag(props: TagProps) {
  const { title, text } = props;
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
        content: e.text,
        type: "info",
      });
    });

    clipboard.on("error", e => {
      message.open({
        content: e.text,
        type: "error",
      });
    });

    return () => {
      clipboard.destroy();
    };
  }, [title, text]);

  return (
    <div
      ref={targetRef}
      className="text-left p-2 mt-2 mb-2 w-1/1 rounded-2 hover:bg-light-600 cursor-pointer"
    >
      <p className="text-size-4 uppercase mb-2">{title}</p>
      <p className="text-size-2">{text}</p>
    </div>
  );
}

export default Tag;
