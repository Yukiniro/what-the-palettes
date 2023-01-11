type TagProps = {
  title: string;
  text: string;
};

function Tag(props: TagProps) {
  const { title, text } = props;
  return (
    <div className="text-left p-2 mt-2 mb-2 w-1/1 rounded-2 hover:bg-light-600 cursor-pointer">
      <p className="text-size-4 uppercase mb-2">{title}</p>
      <p className="text-size-2">{text}</p>
    </div>
  );
}

export default Tag;
