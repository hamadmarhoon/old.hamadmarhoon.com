"use client";
import "./PortfolioGallery.css";
import PortfolioWide from "../PortfolioWide/PortfolioWide";
import PortfolioThin from "../PortfolioThin/PortfolioThin";

import Image from "next/image";

import Truckly1 from "../../Images/Truckly-1.png";
import Truckly2 from "../../Images/Truckly-2.jpg";
import Truckly3 from "../../Images/Truckly-3.png";

export default function PortfolioGallery() {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-mobile">
        <h1 style={{ alignSelf: "flex-start" }}> 📱 MOBILE APPS</h1>
        <PortfolioWide
          link="truckly.io"
          title="Truckly - Consumer"
          image={Truckly3}
          description="A real-time food truck finder."
          stack="REACT NATIVE  •  FIREBASE"
          appStoreLink="https://apps.apple.com/app/id6444747522"
          playStoreLink="https://play.google.com/store/apps/details?id=io.trucklyapp"
        />
        <PortfolioWide
          link="truckly.io"
          title="Truckly - Vendor"
          // image={Truckly3}
          description="Get your food truck on the map."
          stack="REACT NATIVE  •  FIREBASE  •  GOOGLE CLOUD"
          appStoreLink="https://apps.apple.com/app/id6444747522"
          playStoreLink="https://play.google.com/store/apps/details?id=io.trucklyapp"
        />
      </div>

      <div className="portfolio-web">
        <h1 style={{ alignSelf: "flex-start" }}> 🌐 WEB APPS</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "3vw" }}>
          <PortfolioThin
            link="https://www.truckly.io"
            title="Digital Black Religion"
            image={Truckly1}
            description="Explore the contours of Black religion in the digital realm."
            stack="REACT"
          />
          <PortfolioThin
            link="https://www.truckly.io"
            title="Discovering Community in the Borderlands"
            image={Truckly1}
            description="Explore diverse Southern Arizona communities through Augmented Reality."
            stack="REACT •  FIREBASE"
          />
        </div>
      </div>
    </div>
  );
}
