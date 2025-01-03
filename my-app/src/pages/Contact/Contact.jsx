import React from "react";
import "../../styles/contact.css"; // Assuming you create a CSS file for styling

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-title">Contact Us</h1>
    <form className="contact-form">
      <input 
        type="text" 
        placeholder="Your Name" 
        className="contact-input" 
        required
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        className="contact-input" 
        required
      />
      <textarea 
        placeholder="Message" 
        className="contact-textarea" 
        required
      ></textarea>
      <button type="submit" className="contact-button">Send</button>
    </form>
  </div>
);

export default Contact;
