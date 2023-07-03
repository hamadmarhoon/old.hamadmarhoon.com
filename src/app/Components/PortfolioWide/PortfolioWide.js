import React, { useState, useEffect } from "react";
import "./PortfolioWide.css";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import AppStoreLogo from "../../Images/app-store-icon.png";
import PlayStoreLogo from "../../Images/play-store-icon.png";

export default function PortfolioWide({
  link,
  title,
  image,
  description,
  stack,
  appStoreLink,
  playStoreLink,
}) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Setup react-spring transition
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    set({ y: scrollY });
  }, [scrollY, set]);

  return (
    <animated.div
      style={{
        transform: y.interpolate((v) => `translate3d(0, ${v / 50}px, 0)`),
      }}
      className={`portfolioItem`}>
      <div className="textContainer">
        <p className="itemTitle">{title}</p>
        <p className="itemStack">{stack}</p>
        <br />
        <br />
        <p className="itemDescription">{description}</p>
        <div className="itemLinkContainer">
          <a href={appStoreLink} target="_blank">
            <Image className="img-box" width={150} src={AppStoreLogo} />
          </a>
          <a href={playStoreLink} target="_blank">
            <Image
              className="img-box"
              width={150}
              src={PlayStoreLogo}
              alt="Play Store Download Button "
            />
          </a>
        </div>
      </div>
      <div className="portfolioImageContainer"></div>
    </animated.div>
  );
}
