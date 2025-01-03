import React, { useState } from "react";
import "../../styles/eventspage.css"; // Assuming you create a CSS file for styling

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      title: "Tech Expo 2025",
      date: "February 15, 2025",
      type: "Upcoming",
      description: "A showcase of the latest innovations in technology.",
    },
    {
      title: "Agriculture Summit 2024",
      date: "December 5, 2024",
      type: "Recent",
      description: "Discussing sustainable practices in modern agriculture.",
    },
    {
      title: "Real Estate Fair 2025",
      date: "March 20, 2025",
      type: "Upcoming",
      description: "Exploring opportunities in the Kenyan real estate market.",
    },
    {
      title: "SME Awards 2024",
      date: "November 30, 2024",
      type: "Recent",
      description: "Recognizing outstanding SMEs in Kenya.",
    },
    // Add more events here
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upcomingEvents = filteredEvents.filter((event) => event.type === "Upcoming");
  const recentEvents = filteredEvents.filter((event) => event.type === "Recent");

  return (
    <div className="events-container">
      <h1 className="events-title">Events</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-list">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-date">{event.date}</p>
              <p className="event-card-description">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="events-section">
        <h2 className="section-title">Recent Events</h2>
        <div className="events-list">
          {recentEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-date">{event.date}</p>
              <p className="event-card-description">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
