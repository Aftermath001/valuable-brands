import React, { useState } from "react";
import "../../styles/awards.css"; // Assuming you create a CSS file for styling

const Awards = () => {
  const [votes, setVotes] = useState({}); // Tracks votes for each company

  const handleVote = (category, company) => {
    if (!votes[category]) {
      setVotes({ ...votes, [category]: company });
      alert(`You voted for ${company} in the ${category} category.`);
    } else {
      alert("You have already voted in this category.");
    }
  };

  const upcomingAwards = [
    { category: "Best Tech Startup", date: "March 15, 2025" },
    { category: "Most Sustainable Brand", date: "April 10, 2025" },
    // Add more upcoming awards here
  ];

  const pastAwards = [
    { category: "Best SME", winner: "Innovative Solutions Ltd", year: 2024 },
    { category: "Top Real Estate Developer", winner: "Dream Properties", year: 2024 },
    // Add more past awards here
  ];

  const nominations = [
    {
      category: "Best Tech Startup",
      companies: ["TechNova", "FutureCoders", "AI Pioneers"],
    },
    {
      category: "Most Sustainable Brand",
      companies: ["GreenLife", "EcoWorld", "Sustaina"],
    },
    // Add more nominations here
  ];

  return (
    <div className="awards-container">
      <h1 className="awards-title">Awards</h1>

      <section className="awards-section">
        <h2 className="section-title">Upcoming Awards</h2>
        <ul className="awards-list">
          {upcomingAwards.map((award, index) => (
            <li key={index} className="award-item">
              <strong>{award.category}</strong> - {award.date}
            </li>
          ))}
        </ul>
      </section>

      <section className="awards-section">
        <h2 className="section-title">Past Awards and Winners</h2>
        <ul className="awards-list">
          {pastAwards.map((award, index) => (
            <li key={index} className="award-item">
              <strong>{award.category}</strong> ({award.year}) - Winner: {award.winner}
            </li>
          ))}
        </ul>
      </section>

      <section className="awards-section">
        <h2 className="section-title">Nominated Companies</h2>
        {nominations.map((nomination, index) => (
          <div key={index} className="nomination-card">
            <h3 className="nomination-category">{nomination.category}</h3>
            <ul className="nomination-list">
              {nomination.companies.map((company, i) => (
                <li key={i} className="nomination-item">
                  {company}
                  <button
                    className="vote-button"
                    onClick={() => handleVote(nomination.category, company)}
                    disabled={votes[nomination.category] !== undefined}
                  >
                    Vote
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Awards;
