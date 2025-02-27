import React from "react";
import "./Hero.css";


function Hero() {
  return (
    <section className="hero">
      <img src="/assets/images/hero-bg.jpg" alt="Hero Background" className="hero-banner" />
      <div className="hero-content">
        <h1>Welcome to The London Library's CLONE</h1>
        <p>Prototype Version: 0 (ZERO)</p>
        <a href="/join" className="btn"> Framework </a>
      </div>
    </section>
  );
}

export default Hero;
