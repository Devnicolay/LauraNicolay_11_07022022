import chevronBottom from "../../assets/arrowBottom.png";
import { useState, useRef } from "react";

function Collapse({ title, content }) {
  const [active, setActiveState] = useState("");

  const contentActive = useRef(null);

  function handleCollapse() {
    setActiveState(active === "" ? "active" : "");
  }

  return (
    <div className={`container-collapse ${active}`}>
      <button type="button" className="collapse" onClick={handleCollapse}>
        {title}
        <img
          className="chevron-collapse"
          src={chevronBottom}
          alt="open collapse"
        />
      </button>
      <div ref={contentActive} className="content-collapse">
        {content}
      </div>
    </div>
  );
}

export default Collapse;
