//this is a helper for lazy loading for Collections.jsx for the images to load only when they are in the viewport
import { useEffect } from "react";

function useLazyLoading() {
  useEffect(() => {
    const images = document.querySelectorAll(".lazy-image");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // set the src when the image is in the viewport
          img.classList.add("loaded"); // add the loaded class to the image
          observer.unobserve(img); //this stoppes the observer after the image is loaded
        }
      });
    });

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect(); // this cleans up the memory after the component is unmounted 
  }, []);
}

export default useLazyLoading;
