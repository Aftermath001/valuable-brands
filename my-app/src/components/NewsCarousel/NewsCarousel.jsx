import React, { useState } from "react";
import "../../styles/NewsCarousel.css";

const newsData = [
  {
    id: 1,
    title: "Valuable Brands Awards 2024 Announced",
    description: "Discover the top-performing brands this year!",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Upcoming Networking Event",
    description: "Join us for a day of insights and connections.",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Latest Trends in Branding",
    description: "Explore how the industry is evolving.",
    image: "/images/news3.jpg",
  },
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
  };

  return (
    <div className="news-carousel">
      <button onClick={goToPrevious} className="carousel-btn">❮</button>
      <div className="carousel-item">
        <img src={newsData[currentIndex].image} alt={newsData[currentIndex].title} />
        <div className="carousel-text">
          <h3>{newsData[currentIndex].title}</h3>
          <p>{newsData[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={goToNext} className="carousel-btn">❯</button>
    </div>
  );
};

export default NewsCarousel;
