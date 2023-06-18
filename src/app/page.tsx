import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
    </div>
  );
}
