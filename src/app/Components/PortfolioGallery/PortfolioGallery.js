"use client";
import "./PortfolioGallery.css";
import PortfolioWide from "../PortfolioWide/PortfolioWide";
import PortfolioThin from "../PortfolioThin/PortfolioThin";
import PhonePortfolio from "../PhonePortfolio/PhonePortfolio";
import WebPortfolio from "../WebPortfolio/WebPortfolio";
import Image from "next/image";
import DBRShot from "../../Images/DBRShot.png";
import DCBShot from "../../Images/DCBShot.png";
import AMShot from "../../Images/AMShot.png";
import TrucklyShot from "../../Images/TrucklyShot.png";
import TrucklyVendorShot from "../../Images/TrucklyVendorShot.png";

export default function PortfolioGallery() {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-mobile">
        <h1 style={{ alignSelf: "flex-start" }}> 📱 MOBILE APPS</h1>
        <div className="phone-container">
          <PhonePortfolio
            gif={TrucklyShot}
            link="truckly.io"
            title="Truckly - Consumer"
            description="A real-time food truck finder."
            appStoreLink="https://apps.apple.com/us/app/truckly-food-truck-finder/id6444747522"
            playStoreLink="https://play.google.com/store/apps/details?id=io.trucklyapp"
            stack="REACT NATIVE • FIREBASE • EXPO • REDUX"
          />
          <PhonePortfolio
            gif={TrucklyVendorShot}
            title="Truckly - Vendor"
            description="Get your food truck on the map."
            stack="REACT NATIVE  •  FIREBASE  • EXPO • GOOGLE CLOUD • AWS "
            appStoreLink="https://apps.apple.com/us/app/truckly-vendor/id6444873700"
            playStoreLink="https://play.google.com/store/apps/details?id=io.trucklyvendors"
          />
        </div>
      </div>

      <div className="portfolio-web">
        <h1 style={{ alignSelf: "flex-start" }}> 🌐 WEB APPS</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3vw",
            alignItems: "center",
          }}>
          <WebPortfolio
            gif={AMShot}
            link="https://ancient-to-modern.arizona.edu"
            title="Ancient to Modern"
            description="Explore American Southwestern Jewelry"
            stack="REACT • JAVASCRIPT • HTML/CSS"
          />
          <WebPortfolio
            gif={DBRShot}
            link="https://digitalblackreligion.web.app"
            title="Digital Black Religion"
            description="Explore the contours of Black religion in the digital realm."
            stack="REACT • JAVASCRIPT • HTML/CSS"
          />
          <WebPortfolio
            gif={DCBShot}
            link="https://dcb.ariona.edu"
            title="Discovering Community in the Borderlands"
            description="Explore diverse Southern Arizona communities through Augmented Reality."
            stack="REACT •  FIREBASE • JAVASCRIPT • HTML/CSS"
          />
        </div>
      </div>
    </div>
  );
}
