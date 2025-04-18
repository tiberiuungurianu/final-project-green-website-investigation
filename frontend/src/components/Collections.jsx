import React, { useEffect } from "react";
import './Collections.css';

const collectionsData = [
  {
    key: "rarebooks",
    title: "Rare Books",
    image: "rarebooks-600.webp", // 600px image
    description: "A curated selection of rare and valuable books."
  },
  {
    key: "manuscripts",
    title: "Manuscripts",
    image: "manuscripts-600.webp",
    description: "Handwritten documents and original manuscripts from notable authors."
  },
  {
    key: "periodicals",
    title: "Periodicals",
    image: "periodicals-600.webp",
    description: "A collection of historic periodicals and magazines."
  },
  {
    key: "digital-archives",
    title: "Digital Archives",
    image: "digital-archives-600.webp",
    description: "A collection of digitized historical texts and archives for research."
  }
];

const Collections = () => {
  useEffect(() => {
    const lazyImages = document.querySelectorAll("img.lazy-image");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.srcset = img.dataset.srcset;
          img.classList.add("loaded");
          obs.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pagestyle">
      <h2>The Collection</h2>
      <div className="pagestyle-grid">
        {collectionsData.map((collection, index) => (
          <div className="pagestyle-card" key={index}>
            <div className="card-content">
              <img
                className="lazy-image"
                alt={collection.title}
                data-src={`/assets/images/${collection.key}-250.webp`}
                data-srcset={`
                  /assets/images/${collection.key}-250.webp 250w,
                  /assets/images/${collection.image} 600w
                `}
                sizes="(max-width: 768px) 80vw, 250px"
                width="250"
                height="150"
              />
              <div className="pagestyle-title">
                <h3>{collection.title}</h3>
              </div>
              <div className="card-description">{collection.description}</div>
            </div>
            <a href="#" className="btn">Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
