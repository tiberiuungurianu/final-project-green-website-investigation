import React, { useEffect, useState } from "react";

function Hero({ setSelectedPage }) { 
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/images/hero-bg.webp";
    img.onload = () => setBackgroundLoaded(true);
  }, []);

  return (
    <section
      className={`hero ${backgroundLoaded ? "loaded" : ""}`}
      style={backgroundLoaded ? { backgroundImage: `url(/assets/images/hero-bg.webp)` } : {}}
    >
      <div className="hero-overlay"></div>  
      <div className="hero-content">
        <h1>Welcome to The London Library CLONE - Green Website</h1>
        <p>This prototype is used for research purposes only</p>
        <button className="btn" onClick={() => setSelectedPage("framework")}>
          Framework
        </button>
      </div>
    </section>
  );
}

export default Hero;
