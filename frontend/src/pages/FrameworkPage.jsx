import React from "react";
import "./FrameworkPage.css";

function FrameworkPage() {
  return (
    <div className="framework-page page">
      <div className="container">
        <h2 className="framework-title">The Framework</h2>
        <div className="framework-content">
          <img
            src="/assets/images/framework.svg"
            alt="Sustainable design framework diagram"
            className="framework-image"
          />
        </div>
      </div>
    </div>
  );
}

export default FrameworkPage;
