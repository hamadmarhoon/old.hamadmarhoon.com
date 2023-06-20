"use client";

import Grid from "@mui/material/Grid";
import "./Welcome.css";
import Image from "next/image";
import Headshot from "../../Images/Logo.png";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        {/* <Image src={Headshot} alt="Logo" className="welcome-headshot" /> */}
        <div className="welcome-headshot" style={{ backgroundColor: "grey" }} />
        <div className="welcome-text">
          <p className="welcome-name">Hamad Marhoon</p>
          <p className="welcome-tag">Full Stack Mobile & Web Developer</p>
        </div>
      </div>
    </div>
  );
}
