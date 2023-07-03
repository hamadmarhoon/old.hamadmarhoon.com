import React from "react";
import "./PhonePortfolio.css";
import Image from "next/image";
import AppStoreLogo from "../../Images/app-store-icon.png";
import PlayStoreLogo from "../../Images/play-store-icon.png";

function PhonePortfolio({
  gif,
  link,
  title,
  image,
  description,
  stack,
  appStoreLink,
  playStoreLink,
}) {
  return (
    <div className="phone-portfolio-container">
      <div className="phone-portfolio-image">
        <Image src={gif} alt={title} fill />
        <div className="textContainer">
          <p className="itemTitle">{title}</p>
          <p className="itemStack">{stack}</p>
          <br />
          <p className="itemDescription">{description}</p>
          <div className="downloadLinks">
            <a href={playStoreLink} target="_blank" className="downloadButton">
              <Image src={PlayStoreLogo} width={120} />
            </a>
            <a href={appStoreLink} target="_blank" className="downloadButton">
              <Image src={AppStoreLogo} width={120} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhonePortfolio;
