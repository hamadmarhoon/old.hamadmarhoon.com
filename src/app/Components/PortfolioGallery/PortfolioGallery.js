"use client";
import "./PortfolioGallery.css";
import PortfolioWide from "../PortfolioWide/PortfolioWide";
import Image from "next/image";

import Truckly1 from "../../Images/Truckly-1.png";
import Truckly2 from "../../Images/Truckly-2.jpg";

export default function PortfolioGallery() {
  return (
    <div className="portfolio-container">
      {/* <h1 style={{ marginLeft: "20vw" }}> 📱 MOBILE APPS</h1> */}
      <div className="portfolio-mobile">
        <PortfolioWide
          link="truckly.io"
          title="Truckly"
          image={Truckly1}
          description="Truckly"
          stack="react"
        />
        {/* <PortfolioWide
          link="google.com"
          title="goodle"
          image={Truckly2}
          description="desc"
          stack="react"
        /> */}
      </div>
      {/* <h1 style={{ marginLeft: "20vw", marginTop: "5vh" }}> 🌐 WEB APPS</h1> */}
      <div className="portfolio-web">
        {/* <PortfolioItemHorizontal
          link="truckly.io"
          title="Truckly"
          image={Truckly1}
          description="Truckly"
          stack="react"
        />
        <PortfolioItemHorizontal
          link="truckly.io"
          title="Truckly"
          image={Truckly1}
          description="Truckly"
          stack="react"
        /> */}
      </div>
    </div>
  );
}
