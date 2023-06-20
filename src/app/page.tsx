"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import PortfolioGallery from "./Components/PortfolioGallery/PortfolioGallery";
import Footer from "./Components/Footer/Footer";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <Welcome />
        <PortfolioGallery />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
