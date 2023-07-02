"use client";

import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Set up a responsive navbar that will collapse into a hamburger menu on smaller screens
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <h1 className="navbar-logo-text">Hamad Marhoon</h1>
        </a>
        <div className="menu-icon" onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? (
            <CloseIcon className="close-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <ul className={`nav-menu ${navbarOpen ? " showMenu" : ""}`}>
          <li className="nav-item">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("portfolio");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="nav-links">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-links">
              Resume
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
