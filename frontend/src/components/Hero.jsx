import React from "react";
import "./Hero.css";

function Hero({ setSelectedPage }) {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
      <img
  src="/assets/images/hero-bg-small.webp"
  srcSet="
    /assets/images/hero-bg-small-480.webp 480w,
    /assets/images/hero-bg-small-768.webp 768w,
    /assets/images/hero-bg-small.webp 1280w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  width="1280"
  height="720"
  alt="Hero Slide 1"
  className="hero-slide img1"
  loading="eager"
  fetchpriority="high"
/>



        <img
          src="/assets/images/carusel-1.webp"
          alt="Hero Slide 2"
            width="1280"
  height="720"
          className="hero-slide img2"
          loading="lazy"
        />
        <img
          src="/assets/images/carusel-2.webp"
          alt="Hero Slide 3"  width="1280"
  height="720"
          className="hero-slide img3"
          loading="lazy"
        />
        <img
          src="/assets/images/carusel-3.webp"
          alt="Hero Slide 4"
            width="1280"
  height="720"
          className="hero-slide img4"
          loading="lazy"
        />
        <img
          src="/assets/images/carusel-4.webp"
          alt="Hero Slide 5"
            width="1280"
  height="720"
          className="hero-slide img5"
          loading="lazy"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Welcome to The London Library CLONE - Green Website</h1>
        <p>This prototype is used for research purposes only</p>
        <button
          className="hero-button"
          onClick={() => setSelectedPage("framework")}
        >
          Framework
        </button>
      </div>
    </section>
  );
}

export default Hero;
