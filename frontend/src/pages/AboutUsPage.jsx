import React from "react";
import "./AboutUsPage.css";
import aboutUsText from "../content/aboutUsText"; 

function AboutUsPage() {
  return (
    <section className="about-us">
         <h1>{aboutUsText.title}</h1>
      <div className="container">
       
        <div>
        {aboutUsText.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
        </div>
    </section>
  );
}

export default AboutUsPage;
