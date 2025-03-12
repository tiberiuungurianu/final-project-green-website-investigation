import React, { useEffect } from "react";

const collectionsData = [
  {
    title: "Rare Books",
    image: "/assets/images/rarebooks-small.webp",
    description: "A curated selection of rare and valuable books.",
  },
  {
    title: "Manuscripts",
    image: "/assets/images/manuscripts-small.webp",
    description: "Handwritten documents and original manuscripts from notable authors.",
  },
  {
    title: "Periodicals",
    image: "/assets/images/periodicals-small.webp",
    description: "A collection of historic periodicals and magazines.",
  },
  {
    title: "Digital Archives",
    image: "/assets/images/digital-archives-small.webp",
    description: "A collection of digitized historical texts and archives for research.",
  },

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

  useEffect(() => {
    const images = document.querySelectorAll("img.lazy-image");
    images.forEach((img) => {
      img.dataset.src = img.getAttribute("data-src");
      img.dataset.srcset = img.getAttribute("data-srcset");
    });
  }, []);

  return (
    <section className="collections">
      <h2>The Collection</h2>
      <div className="collections-grid">
        {collectionsData.map((collection, index) => (
          <div className="collection-card" key={index}>
            <img
              className="lazy-image"
              alt={collection.title}
              data-src={collection.image}
              data-srcset={
                collection.imageSmall
                  ? `${collection.imageSmall} 600w, ${collection.image} 1200w`
                  : collection.image
              }
              sizes="(max-width: 600px) 600px, 1200px"
            />
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
