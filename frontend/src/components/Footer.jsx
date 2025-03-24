import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src="/assets/images/logo-white-small.webp"
          alt="Footer Logo White"
          className="footer-logo"
          width={90}
          height={90}
          loading="eager"
        />

        <div className="footer-citation">
          <h1>"A library steeped in history"</h1>
          <h2>Tom Holland</h2>
        </div>

        <p>© 2025 London Library - All Rights Reserved (usually, not today)</p>
      </div>
    </footer>
  );
}

export default Footer;
