import React, { useState, useEffect } from "react";
import "./SupportUsPage.css";

function SupportUsPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [content, setContent] = useState({ mainText: "", secondColumn: "" });
  const imageSrc = "/assets/images/video-page-photo.jpg";

  useEffect(() => {
    const handleBeforeUnload = () => console.log("Page is reloading");
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Preia conținutul din JSON
  useEffect(() => {
    fetch("/content/contentSupportUsPage.json")
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
      })
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  return (
    <div className="support-page">
      <h2>Film at The London Library Video Optimisation Part</h2>

      <div className="image-container">
        <img src={imageSrc} alt="Support Us" />
      </div>

      <div className="main-content">
        {/* Containerul suplimentar pentru cele două coloane */}
        <div className="columns-wrapper">
          <div className="main-text">
            {content.mainText}
          </div>
          <div className="second-column">
            {content.secondColumn}
          </div>
        </div>
      </div>

      <div className="video-container">
        {!videoLoaded ? (
          <button
            className="load-video-btn"
            onClick={() => setVideoLoaded(true)}
          >
            Press To Load Video
          </button>
        ) : (
          <iframe
            width="682"
            height="384"
            src="https://player.vimeo.com/video/260748805"
            title="Example Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default SupportUsPage;
