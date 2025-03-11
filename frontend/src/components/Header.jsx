import React from "react";

const navLinks = [
  { name: "About Us", page: "about" },
  { name: "Collections", page: "collections" },
  { name: "Framework", page: "framework" },
  { name: "Events", page: "events" },
  { name: "Video Optimisation", page: "support" }
];

function Header({ setSelectedPage }) {
  // Handler generic pentru toate link-urile de navigație
  const handleLinkClick = (e, page) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setSelectedPage(page);
  };

  return (
    <>
      <header className="header">
        <link rel="preload" as="image" href="/assets/images/hero-bg.webp" type="image/webp"/>
        <div className="container">
          <div className="logo">
            <a href="#" onClick={(e) => handleLinkClick(e, "home")}>
              <img
                src="/assets/images/logo.webp"
                alt="London Library Logo"
                height={90} width={90}
              />
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" onClick={(e) => handleLinkClick(e, link.page)}>
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
              onClick={() => setSelectedPage("subscribe")}
            >
              Subscribe to us
            </button> Clone for Green Website Investigation purposes
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
