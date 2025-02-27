import React from "react";
import "./SupportUsPage.css";

function SupportUsPage() {
  return (
    <div className="support-page">
      <h2>Support Us - To be renamed... </h2>
      <p> This page will be used for video optimisation </p>
      <p>
        Watch our video to learn more about the project:
      </p>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/x1SgmFa0r04" 
          title="Green Website Investigation Video"
            frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SupportUsPage;
