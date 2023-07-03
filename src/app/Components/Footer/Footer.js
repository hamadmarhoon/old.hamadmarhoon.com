import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
      <div className="footerContent">
        <a
          href="https://www.linkedin.com/in/hamad-marhoon/"
          target="_blank"
          className="icon-link">
          <BsLinkedin fontSize={40} />
        </a>
        <a
          href="https://github.com/hamadmarhoon"
          target="_blank"
          className="icon-link">
          <BsGithub fontSize={40} style={{ margin: "5px" }} />
        </a>
      </div>

      {/* s */}
    </div>
  );
}
