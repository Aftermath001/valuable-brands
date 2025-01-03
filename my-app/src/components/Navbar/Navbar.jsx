import React from "react";
import "../../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">ValuableBrands</div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/awards">Awards</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/magazine">Magazine</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
