import { Button } from "antd";

function Footer() {
  return (
    <div className="fixed bottom-0 bg-white w-screen h-12 vertical-middle">
      Created by{"  "}
      <Button
        type="link"
        href="https://github.com/Yukiniro"
        target="_black"
        className="p-0 text-4"
      >
        Yukiniro
      </Button>
    </div>
  );
}

export default Footer;
