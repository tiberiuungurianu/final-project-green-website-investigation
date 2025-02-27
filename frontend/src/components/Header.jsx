import React from "react";
import "./Header.css";

const navLinks = [
  { name: "About Us", page: "about" },
  { name: "Collections", page: "collections" },
  { name: "Framework", page: "framework" },
  { name: "Events", page: "events" },
  { name: "Support Us", page: "support" }
];

function Header({ setSelectedPage }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="#" onClick={() => setSelectedPage("home")}>
              <img src="/assets/images/logo.svg" alt="London Library Logo" width="100.23" height="84" />
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" onClick={() => setSelectedPage(link.page)}>
                    {link.name}
                  </a>
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
