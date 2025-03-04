import React, { lazy, Suspense, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"; // Minimize JavaScript requests

// Lazy loading pentru pagini
const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionsPage = lazy(() => import("./pages/CollectionsPage"));
const FrameworkPage = lazy(() => import("./pages/FrameworkPage"));
const SupportUsPage = lazy(() => import("./pages/SupportUsPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));

function App() {
  const [selectedPage, setSelectedPage] = useState("home"); 

  return (
    <>
      <Header setSelectedPage={setSelectedPage} />
{/*styling the loading message*/}
      <Suspense fallback={
    <div className="loading-container">
        <p>Loading...</p> 
    </div>
      }>
        {selectedPage === "home" && <HomePage setSelectedPage={setSelectedPage} />} 
        {selectedPage === "about" && <AboutUsPage />}
        {selectedPage === "collections" && <CollectionsPage />}
        {selectedPage === "events" && <EventsPage />}
        {selectedPage === "framework" && <FrameworkPage />}
        {selectedPage === "support" && <SupportUsPage />}
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
