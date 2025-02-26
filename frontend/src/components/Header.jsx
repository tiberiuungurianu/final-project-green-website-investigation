import React from "react";
import "./Header.css";
import logo from "../assets/images/logo.svg"; // Importă SVG-ul

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="London Library Logo" width="100.23" height="84" />
          </a>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Join</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Support Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
