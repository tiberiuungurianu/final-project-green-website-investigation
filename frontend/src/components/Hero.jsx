import React from "react";
import "./Hero.css";
import heroImage from "../assets/images/hero-bg.jpg"; // Importăm imaginea ca banner

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="London Library Banner" className="hero-banner" />
      <div className="hero-content">
        <h1>Welcome to The London Library - CLONE for researching</h1>
        <p>Prototype Version 0 (zero)</p>
        <a href="/join" className="btn">Join Now</a>
      </div>
    </section>
  );
}

export default Hero;
