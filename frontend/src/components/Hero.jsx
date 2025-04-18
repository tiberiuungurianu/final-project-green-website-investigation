import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero({ setSelectedPage }) {
  const images = [
    "/assets/images/hero-bg-small.webp",
    "/assets/images/carusel-1.webp",
    "/assets/images/carusel-2.webp",
    "/assets/images/carusel-3.webp",
    "/assets/images/carusel-4.webp",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const idleCallback = window.requestIdleCallback || window.setTimeout;

    const handle = idleCallback(() =>
      setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % images.length);
      }, 5000)
    );

    return () => clearInterval(handle);
  }, [images.length]);

  const goToNext = () =>
    setActiveSlide((prev) => (prev + 1) % images.length);
  const goToPrev = () =>
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img
          key={activeSlide}
          src={images[activeSlide]}
          srcSet={
            activeSlide === 0
              ? "/assets/images/hero-bg-small.webp 1280w"
              : undefined
          }
          sizes="(max-width: 768px) 100vw, 50vw"
          width="1280"
          height="720"
          alt={`Hero Slide ${activeSlide + 1}`}
          className="hero-slide visible"
          loading={activeSlide === 0 ? "eager" : "lazy"}
          fetchPriority={activeSlide === 0 ? "high" : "low"}
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

      <button className="hero-nav prev" onClick={goToPrev}>
        ‹
      </button>
      <button className="hero-nav next" onClick={goToNext}>
        ›
      </button>
    </section>
  );
}

export default Hero;
