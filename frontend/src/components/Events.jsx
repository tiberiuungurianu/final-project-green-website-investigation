import React from "react";
function Events() {
  return (
    <section className="events">
      <div className="container">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
          <li>
            <h3>Murder in the Library</h3>
            <p>Golden age crime fiction discussion</p>
            <span>Feb 27, 2025</span>
          </li>
          <li>
            <h3>Public Tour</h3>
            <p>Discover the library's history</p>
            <span>Mar 3, 2025</span>
          </li>
          <li>
            <h3>Jewish Book Week</h3>
            <p>Events with Anne Sebba & more</p>
            <span>Mar 9, 2025</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Events;