 import React from "react";

import "./Hero.css"; // Importă CSS-ul unde este definit `.navbar`

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Framework</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Video</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;