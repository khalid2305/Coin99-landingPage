import { div } from "framer-motion/client";

export default function sideBar() {
  return (
    <div>
      <div className="">
        <h1>COIN99</h1>
        <button>X</button>
      </div>
      <br />
      <div className="">
        <div>
          <h1>Products</h1>
          <button>+</button>
        </div>
        <div>
          <h1>Trade</h1>
          <button>+</button>
        </div>
        <div>
          <h1>Resources</h1>
          <button>+</button>
        </div>
        <div>
          <h1>About</h1>
        </div>
        <hr />
        <div>
          <h1>English</h1>
          <h1>USD</h1>
        </div>
        <hr />
        <div>
            <h1>Download the app</h1>
        </div>
      </div>
    </div>
  );
}
