import React from "react";
import "./WebPortfolio.css";
import LaunchIcon from "@mui/icons-material/Launch";
import Image from "next/image";

function PhonePortfolio({ gif, link, title, image, description, stack }) {
  return (
    <div className="web-portfolio-container">
      <div className="web-portfolio-image">
        <Image src={gif} alt={title} fill />
        <div className="textContainer">
          <p className="itemTitle">{title}</p>
          <p className="itemStack">{stack}</p>
          <br />
          <p className="itemDescription">{description}</p>
          <a className="openProject" target="_blank" href={link}>
            <p style={{ fontSize: "16px" }}>Open Project</p>
            <LaunchIcon fontSize="inherit" color="black" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PhonePortfolio;
