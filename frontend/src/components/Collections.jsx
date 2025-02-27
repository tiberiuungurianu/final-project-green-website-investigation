import React from "react";
import "./Collections.css";

const collectionsData = [
  {
    title: "Rare Books",
    image: "../assets/images/rarebooks.jpg",
    description: "A collection of rare and historic books dating back to the 17th century.",
  },
  {
    title: "Manuscripts",
    image: "../assets/images/manuscripts.jpg",
    description: "Handwritten documents and original manuscripts from notable authors.",
  },
  {
    title: "Periodicals",
    image: "../assets/images/periodicals.jpg",
    description: "A wide range of journals, newspapers, and magazines spanning decades.",
  },
  {
    title: "Digital Archives",
    image: "../assets/images/digital-archives.jpg",
    description: "A collection of digitized historical texts and archives for research.",
  },
];

function Collections() {
  return (
    <section className="collections">
      <h2>The Collection</h2>
      <div className="collections-grid">
        {collectionsData.map((collection, index) => (
          <div className="collection-card" key={index}>
            <img src={collection.image} alt={collection.title} />
            <h3>{collection.title}</h3>
            <p>{collection.description}</p>
            <a href="#" className="btn">Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collections;
