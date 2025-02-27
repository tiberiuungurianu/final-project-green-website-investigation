import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Events from "./components/Events";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Collections />
      <Events />
      <Footer />
    </>
  );
}

export default App;
