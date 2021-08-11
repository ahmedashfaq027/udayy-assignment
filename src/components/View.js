import React, { useState } from "react";
import { useRef } from "react";
import Iframe from "react-iframe";
import "./View.css";

function View({ src, idx }) {
  const [collapse, setCollapse] = useState(false);
  const viewRef = useRef();

  const collapseHandler = (e) => {
    // Collapse the iframe
    if (!collapse) {
      viewRef.current.style.flex = 0.1;
    } else {
      viewRef.current.style.flex = 1;
    }
    setCollapse(!collapse);
  };

  return (
    <div className="view" ref={viewRef}>
      <div className="view__collapseExpandIcon" onClick={collapseHandler}>
        {!collapse ? (
          <i className="fas fa-compress-alt"></i>
        ) : (
          <i className="fas fa-expand-alt"></i>
        )}
      </div>
      {!src && <h3>Please enter url for View {idx} to start rendering</h3>}

      {src && (
        <Iframe
          is="x-frame-bypass"
          title="src"
          src={src}
          className="view__render"
          frameBorder="1"
          width="100%"
          overflow
        ></Iframe>
      )}
    </div>
  );
}

export default View;
