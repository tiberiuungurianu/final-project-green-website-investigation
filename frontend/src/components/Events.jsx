import React from "react";

const eventsData = [
  {
    title: "Lazy Loading & Caching Strategies",
    date: "March 10, 2025",
    description: "Discussion on implementing lazy-loading and caching to reduce energy consumption.",
  },
  {
    title: "Optimizing Backend Processing",
    date: "March 17, 2025",
    description: "Exploring ways to minimize server-side resource consumption and enhance efficiency.",
  },
  {
    title: "Building a Low-Energy Web Experience",
    date: "March 25, 2025",
    description: "A deep dive into energy-efficient UI/UX practices for sustainable web design.",
  },
  {
    title: "Comparing v0 vs v1: Energy & Performance Gains",
    date: "April 5, 2025",
    description: "A report on the improvements and optimizations made in version 1 of the prototype.",
  },
];

function Events() {
  return (
    <section className="events">
      <h2>Upcoming Development Milestones</h2>
      <div className="events-list">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
