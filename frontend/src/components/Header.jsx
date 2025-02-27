import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.svg"; // Import the SVG

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="London Library Logo" width="100.23" height="84" />
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/collections">Collections</a></li>
              <li><a href="/join">Join</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/support-us">Support Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="announcement">
        <div className="container">
          <p className="announcement-text">CLONE for Green Website Investigation purposes</p>
        </div>
      </div>
    </>
  );
}

export default Header;
