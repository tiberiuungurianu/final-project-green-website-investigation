import React from "react";
function Collections() {
  return (
    <section className="collections">
      <div className="container">
        <h2>Explore Our Collection</h2>
        <div className="grid">
          <div className="collection-item">
            <img src="/assets/images/join.jpg" alt="Join the Library" />
            <h3>Join the Library</h3>
          </div>
          <div className="collection-item">
            <img src="/assets/images/membership.jpg" alt="Membership Benefits" />
            <h3>Membership Benefits</h3>
          </div>
          <div className="collection-item">
            <img src="/assets/images/collection.jpg" alt="The Collection" />
            <h3>The Collection</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Collections;
