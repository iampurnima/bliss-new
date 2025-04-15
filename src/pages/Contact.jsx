import React from "react";
import "../components/styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you – let’s brighten your day with a candle!</p>
      </div>

      <div className="contact-content">
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your full name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Message</label>
          <textarea placeholder="Write your message here..." rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Our Contact Info</h2>
          <p><strong>Email:</strong> hello@blisscandles.com</p>
          <p><strong>Phone:</strong> +977-9864421904</p>
          <p><strong>Location:</strong> Kathmandu, Nepal</p>
          <p>Follow us on social media for the latest candle collections & tips! 🌿✨</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
