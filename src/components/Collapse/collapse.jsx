import chevronBottom from "../../assets/arrowBottom.png";
import chevronTop from "../../assets/arrowTop.png";
import { useState, useRef } from "react";

function Collapse({ title, content }) {
  const [setActive, setActiveState] = useState("");
  const [openCollapse, setOpenCollapse] = useState("display=none");

  const contentActive = useRef(null);

  function handleCollapse() {
    setActiveState(setActive === "" ? "active" : "");
    setOpenCollapse(
      setActive === "active"
        ? `${(contentActive.current.style.display = "none")}`
        : `${(contentActive.current.style.display = "block")}`
    );
  }

  return (
    <div className="container-collapse">
      <button
        type="button"
        className={`collapse ${setActive}`}
        onClick={handleCollapse}
      >
        {title}
        <img
          src={openCollapse ? chevronBottom : chevronTop}
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
