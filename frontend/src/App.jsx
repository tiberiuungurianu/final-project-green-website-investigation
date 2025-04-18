import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"; // Minimize JavaScript requests

// Lazy loading 
const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionsPage = lazy(() => import("./pages/CollectionsPage"));
const FrameworkPage = lazy(() => import("./pages/FrameworkPage"));
const SupportUsPage = lazy(() => import("./pages/SupportUsPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const SubscribePage = lazy(() => import("./pages/SubscribePage"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense
        fallback={
          <div className="loading-container" style={{ minHeight: "100vh" }}>
            <p>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/framework" element={<FrameworkPage />} />
          <Route path="/video-optimization" element={<SupportUsPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
