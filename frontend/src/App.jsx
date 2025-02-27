import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage"; 
import CollectionsPage from "./pages/CollectionsPage";
import FrameworkPage from "./pages/FrameworkPage";
import SupportUsPage from "./pages/SupportUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";
import EventsPage from "./pages/EventsPage";
import "./index.css";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <>
      <Header setSelectedPage={setSelectedPage} />

      {selectedPage === "home" && <HomePage />}
      {selectedPage === "about" && <AboutUsPage />}
      {selectedPage === "collections" && <CollectionsPage />}
      {selectedPage === "events" && <EventsPage />}
      {selectedPage === "framework" && <FrameworkPage />}
      {selectedPage === "support" && <SupportUsPage />}

      <Footer />
    </>
  );
}

export default App;
