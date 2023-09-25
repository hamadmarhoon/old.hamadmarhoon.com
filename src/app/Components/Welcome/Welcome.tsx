"use client";

import Grid from "@mui/material/Grid";
import "./Welcome.css";
import Image from "next/image";
import Headshot from "../../Images/headshot.jpg";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <Image src={Headshot} alt="Headshot" className="welcome-headshot" />
        <div className="welcome-text">
          <p className="welcome-name">Hamad Marhoon</p>
          <p className="welcome-tag">Mobile & Web Developer</p>
        </div>
      </div>
    </div>
  );
}
