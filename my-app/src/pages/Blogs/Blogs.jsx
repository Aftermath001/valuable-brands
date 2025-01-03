import React from "react";
import "../../styles/blogs.css"; // Assuming you create a CSS file for styling

const Blog = () => {
  const blogs = [
    {
      title: "The Future of Real Estate in Kenya",
      excerpt: "Exploring the latest trends and opportunities in the Kenyan real estate market.",
      date: "January 1, 2025",
      image: "real-estate.jpg",
    },
    {
      title: "Innovations in Agriculture",
      excerpt: "How technology is transforming farming practices in Kenya.",
      date: "December 15, 2024",
      image: "agriculture.jpg",
    },
    {
      title: "Top SMEs to Watch in 2025",
      excerpt: "A roundup of the most promising small and medium enterprises in Kenya.",
      date: "November 30, 2024",
      image: "smes.jpg",
    },
    // Add more blog entries here
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Recent Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-excerpt">{blog.excerpt}</p>
              <span className="blog-card-date">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
