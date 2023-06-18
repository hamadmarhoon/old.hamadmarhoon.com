"use client";

import "./Navbar.css";
import Image from "next/image";
import logo from "../../Images/Logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <AppBar position="static" color="inherit" className="navbar">
      <Toolbar>
        <Image src={logo} alt="Logo" className="navbar-image-logo" />
        <p className="navbar-title">Hamad Marhoon</p>
      </Toolbar>
    </AppBar>
  );
}
