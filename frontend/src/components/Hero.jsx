import React, { useEffect, useState } from "react";

function Hero({ setSelectedPage }) { 
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/images/hero-bg.jpg";
    img.onload = () => setBackgroundLoaded(true);
  }, []);

  return (
    <section
      className={`hero ${backgroundLoaded ? "loaded" : ""}`}
      style={backgroundLoaded ? { backgroundImage: `url(/assets/images/hero-bg.jpg)` } : {}}
    >
      <div className="hero-overlay"></div>  
      <div className="hero-content">
        <h1>Welcome to The London Library's CLONE</h1>
        <p>Prototype Version: 1 (ONE) - Lazy Loading and Caching</p>
        <button className="btn" onClick={() => setSelectedPage("framework")}>
          Framework
        </button>
      </div>
    </section>
  );
}

export default Hero;
