import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css"; // Include styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="/magazine">Magazine</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/nominations">Award Nominations</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Valuable Brands. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
