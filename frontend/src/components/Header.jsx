import React from "react";
import "./Header.css";

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Collections", path: "/collections" },
  { name: "Framework", path: "/framework" },
  { name: "Events", path: "/events" },
  { name: "Support Us", path: "/support-us" }
];

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src="/assets/images/logo.svg" alt="London Library Logo" width="100.23" height="84" />
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a> {/* 🔹 Doar `<a>`, fără `Link` */}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="announcement">
        <div className="container">
          <p className="announcement-text">
            CLONE for Green Website Investigation purposes
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
