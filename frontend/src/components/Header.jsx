import React from "react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Collections", path: "/collections" },
  { name: "Framework", path: "/framework" },
  { name: "Events", path: "/events" },
  { name: "Video Optimisation", path: "/video-optimization" }
];

function Header() {
  const navigate = useNavigate();

  const scrollToTop = () => window.scrollTo(0, 0);

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
            <Link to="/" onClick={scrollToTop}>
              <img
                src="/assets/images/logo-small.webp"
                alt="London Library Logo"
                height={90}
                width={90}
              />
            </Link>
          </div>
          <nav>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} onClick={scrollToTop}>
                    {link.name}
                  </Link>
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
                scrollToTop();
                navigate("/subscribe");
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
