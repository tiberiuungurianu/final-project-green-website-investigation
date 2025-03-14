import React, { useState, useEffect, useMemo } from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem("aboutUsData");
    if (cachedData) {
      const data = JSON.parse(cachedData);
      setAboutTitle(data.title);
      setAboutText(data.paragraphs.join("\n"));
      setImageSrc(data.image);
      setLoading(false);
    } else {
      fetch("/content/aboutUsText.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("aboutUsData", JSON.stringify(data));
          setAboutTitle(data.title);
          setAboutText(data.paragraphs.join("\n"));
          setImageSrc(data.image);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading content:", error);
          setError("Failed to load content.");
          setLoading(false);
        });
    }
  }, []);

  const formattedText = useMemo(() => aboutText.split("\n"), [aboutText]);

  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  return (
    <section className="about-us">
      <div className="container">
        <h1 className="about-title">{aboutTitle || "Title does not exist"}</h1>

        {/* Imagine normală din JSON, fără Lazy Loading 
        {imageSrc && (
          <img src={imageSrc} alt="About Us" />
        )} */}

        <div className="about-content">
          {formattedText.map((paragraph, index) => (
            <p key={index} className="about-paragraph">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutUsPage);
