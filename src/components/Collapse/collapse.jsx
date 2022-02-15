import chevronBottom from "../../assets/arrowBottom.png";
import { useState, useRef } from "react";

function Collapse({ title, content }) {
  const [active, setActiveState] = useState("");
  const [openCollapse, setOpenCollapse] = useState("display=none");
  const [rotate, setRotate] = useState("chevron-collapse");

  const contentActive = useRef(null);

  function handleCollapse() {
    setActiveState(active === "" ? "active" : "");
    setOpenCollapse(
      active === "active"
        ? `${(contentActive.current.style.display = "none")}`
        : `${(contentActive.current.style.display = "block")}`
    );
    setRotate(active === "" ? "rotate" : "");
  }

  return (
    <div className="container-collapse">
      <button
        type="button"
        className={`collapse ${active}`}
        onClick={handleCollapse}
      >
        {title}
        <img
          className={`chevron-collapse ${rotate}`}
          src={chevronBottom}
          alt="open collapse"
        />
      </button>
      <div
        ref={contentActive}
        style={{ openCollapse }}
        className="content-collapse"
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
