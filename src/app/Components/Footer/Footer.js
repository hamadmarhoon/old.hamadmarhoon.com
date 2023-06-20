import React from "react";
import "./Footer.css";

export default function Footer() {
  const Circle = ({ index }) => {
    const zIndex = index % 2 === 0 ? 1 : 3;
    return (
      <div className="outermost" style={{ zIndex: zIndex }}>
        <div className="second">
          <div className="third">
            <div className="innermost"></div>
          </div>
        </div>
      </div>
    );
  };

  function circleGenerator() {
    const circles = [];
    for (let i = 0; i < 30; i++) {
      circles.push(<Circle key={i} index={i} />);
    }
    return circles;
  }

  return (
    <div className="footer">
      <div className="circleParent">
        <div className="circleContainer">{circleGenerator()}</div>
      </div>
      <div className="footerContent">Hello</div>

      {/* s */}
    </div>
  );
}
