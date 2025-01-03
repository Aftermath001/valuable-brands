import React, { useState } from "react";
import "../../styles/magazine.css"; // Assuming you create a CSS file for styling

const Magazine = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const magazines = [
    { title: "Real Estate Trends 2025", category: "Real Estate" },
    { title: "Sustainable Agriculture Practices", category: "Agriculture" },
    { title: "Tech Startups to Watch", category: "Technology" },
    // Add more magazine entries here
  ];

  const filteredMagazines = magazines.filter((magazine) =>
    magazine.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    magazine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="magazine-container">
      <h1 className="magazine-title">Latest Magazines</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by topic (e.g., Real Estate, Agriculture)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="magazine-list">
        {filteredMagazines.map((magazine, index) => (
          <div key={index} className="magazine-card">
            <h2 className="magazine-card-title">{magazine.title}</h2>
            <p className="magazine-card-category">{magazine.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Magazine;
