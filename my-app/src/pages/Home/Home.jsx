import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";

const Home = () => (
  <div>
    <HeroSection
      title="Welcome to Valuable Brands"
      subtitle="Highlighting Kenya's most influential brands."
      buttonText="Learn More"
    />
    <NewsCarousel />
    {/* Add more sections like featured blogs, events, etc. */}
  </div>
);

export default Home;
