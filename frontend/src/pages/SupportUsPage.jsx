import React, { useState } from "react";
import "./SupportUsPage.css";

function SupportUsPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="support-page">
      <h2>Video Optimisation Part</h2>
      <p> This page will be used for video optimisation </p>
      <p>Watch our video to learn more about the project:</p>

    {/*adding lazy video loading from external source*/}
      <div className="video-container">
        {!videoLoaded ? (
          <button className="load-video-btn" onClick={() => setVideoLoaded(true)}> 
            Press To Load Video
          </button>
        ) : (
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/x1SgmFa0r04" 
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
