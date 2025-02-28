import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"; // Minimise JavaScript requests

// Implementing more lazy loading
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

      {/* Lazy loading. Pages will load only when selected. */}
      <Suspense fallback={<p>Loading...</p>}>
        {selectedPage === "home" && <HomePage />}
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
