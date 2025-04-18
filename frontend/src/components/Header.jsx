import React from "react";
import './Header.css';

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Collections", path: "/collections" },
  { name: "Framework", path: "/framework" },
  { name: "Events", path: "/events" },
  { name: "Video Optimisation", path: "/video-optimization" }
];

function Header() {
  return (
    <>
      <header className="header">
        <link
          rel="preload"
          as="image"
          href="/assets/images/hero-bg-small.webp"
          type="image/webp"
        />
        <div className="container">
          <div className="logo">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/assets/images/logo-small.webp"
                alt="London Library Logo"
                height={90}
                width={90}
              />
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} onClick={() => window.scrollTo(0, 0)}>
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
            <button
              className="subscribe-button"
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.href = "/subscribe";  // Redirect to subscribe page
              }}
            >
              Subscribe to us
            </button>{" "}
            Clone for Green Website Investigation purposes
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
