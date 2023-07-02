import React, { useState, useEffect } from "react";
import "./PortfolioThin.css";
import Image from "next/image";
import { useSpring, animated } from "react-spring";

export default function PortfolioThin({
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
      className={`portfolioThinItem`}>
      <div className="portfolioThinContent">
        <div className="textContainer">
          <p className="itemTitle">{title}</p>
          <p className="itemStack">{stack}</p>
          <br />
          <br />
          <p className="itemDescription">{description}</p>
          <div className="itemLinkContainer"></div>
        </div>
      </div>
      {/* <div className="portfolioImageContainer">
        <Image src={image} alt={title} fill />
      </div> */}
    </animated.div>
  );
}
