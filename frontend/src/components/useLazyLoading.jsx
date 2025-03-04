//this is a helper for lazy loading for Collections.jsx
import { useEffect } from "react";

function useLazyLoading() {
  useEffect(() => {
    const images = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Setează `src` când imaginea intră în viewport
          img.classList.add("loaded"); // Adaugă o clasă pentru efect vizual
          observer.unobserve(img); // Oprește observarea după încărcare
        }
      });
    });

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect(); // this cleans up the memory    
  }, []);
}

export default useLazyLoading;
