import React from "react";
import Hero from "../components/Hero"; 
import Collections from "../components/Collections"; 
import Events from "../components/Events";

import "./HomePage.css"; 

function HomePage({ setSelectedPage }) { 
  return (
    <div className="home-page">
      <Hero setSelectedPage={setSelectedPage} /> 
      <Collections />
      <Events />
    </div>
  );
}

export default HomePage;
