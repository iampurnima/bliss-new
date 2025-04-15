// About.jsx
import React from "react";
import "../components/styles/About.css";

const About = () => {
    return (
      <div className="about-container">
        <div className="about-hero">
          <h1>Our Story Begins With a Flame ✨</h1>
          <p>
            What started as a small passion project in a cozy kitchen turned into a heartfelt journey of spreading warmth, light, and peace. Each candle we create is hand-poured with love, care, and the intention to soothe your soul.
          </p>
        </div>
  
        <div className="about-story">
          <h2>Our Candle Journey 🕯️</h2>
          <p>
            During a quiet winter evening, with a dream in my heart and wax on my hands, I poured my first candle. It wasn’t perfect, but it was full of hope. I wanted to bring healing to people — through scents, light, and energy. That first candle lit the way for something beautiful.
          </p>
          <p>
            We now offer a wide range of candles — for celebration, for meditation, for romance, and for relaxation. Every candle holds a story, and now, we invite you to be a part of ours.
          </p>
        </div>
  
        <div className="about-features">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>🌿 100% Natural Soy Wax – eco-friendly and clean-burning</li>
            <li>🎁🏠You can customize your own candles for gifts, home décor, or personal use 💖</li>
            <li>🧘‍♀️ Aromatherapy blends for wellness and balance</li>
            <li>🎁 Handcrafted gift sets for every special moment</li>
            <li>🌸 Customized scents for your moods and occasions</li>
            <li>💖 Women-led, heart-driven small business</li>
          </ul>
        </div>
  
        <div className="about-closing">
          <p>
            Thank you for supporting our small business. Every purchase you make supports a dream, a passion, and the intention to bring more light into this world.
          </p>
          <div className="signature">
            <p>With warmth,</p>
            <h3>Purniimaa Sharma</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;