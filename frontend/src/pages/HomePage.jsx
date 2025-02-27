import React from "react";
import Hero from "../components/Hero"; 
import Collections from "../components/Collections"; 
import Events from "../components/Events";
import Footer from "../components/Footer";
import "./HomePage.css"; 
function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Collections />
      <Events />
    </div>
  );
}

export default HomePage;
