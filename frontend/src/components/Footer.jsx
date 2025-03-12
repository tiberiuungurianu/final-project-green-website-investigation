import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src="/assets/images/logo-white-small.webp" alt="Footer Logo White" className="footer-logo"  height={90} width={90
        }/>
        
        <div className="footer-citation">
          <h1>"A library steeped in history"</h1>
          <h2>Tom Holland</h2> 
        </div>

        <p>© 2025 London Library - All Rights Reserved (usually, not today) </p>
      </div>
    </footer>
  );
}

export default Footer;
