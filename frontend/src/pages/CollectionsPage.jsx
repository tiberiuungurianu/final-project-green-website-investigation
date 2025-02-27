import React from "react";
import "./CollectionsPage.css"; // Asigură-te că fișierul CSS există
import Collections from "../components/Collections";
import Footer from "../components/Footer";

function CollectionsPage() {
  return (
    <div className="collections-page"> 
    {/* } <h2>Our Collections</h2> */}
      <Collections />
    </div>
  );
}

export default CollectionsPage;
