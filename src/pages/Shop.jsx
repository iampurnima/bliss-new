import React from 'react';
import "../components/styles/Shop.css";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: "Home Décor Candles",
      image: "../src/assets/decore.webp",
      slug: "home-decor-candles"
    },
    {
      name: "Guest Candles",
      image: "../src/assets/guest.webp",
      slug: "guest-candles"
    },
    {
      name: "Special Candles",
      image: "../src/assets/special.png",
      slug: "special-candles"
    },
    {
      name: "Birthday Candles",
      image: "../src/assets/Birthday1.webp",
      slug: "birthday-candles"
    },
    {
      name: "Gift Candles",
      image: "../src/assets/gift.png",
      slug: "gift-candles"
    },
    {
      name: "Aromatherapy Healing Candles",
      image: "/images/categories/aromatherapy.jpg",
      slug: "aromatherapy-candles"
    },
    {
      name: "Stress Relief Candles",
      image: "/images/categories/stress.jpg",
      slug: "stress-relief-candles"
    },
    {
      name: "Valentine's Day Special Candles",
      image: "/images/categories/valentines.jpg",
      slug: "valentines-candles"
    },
    {
      name: "Romantic Candles",
      image: "../src/assets/romantic.jpeg",
      slug: "romantic-candles"
    }
  ];
  return (

    <div className="shop-container">
      <div className="shop-hero">
        <h1>Discover Your Perfect Candle</h1>
        <p>Explore categories from healing vibes to romantic nights ✨</p>
      </div>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card" onClick={() => navigate(`/shop/${cat.slug}`)}>
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Shop;