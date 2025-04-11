import React from 'react';
import "../components/styles/HomePage.css";

const LandingPage = () => {
    const candles = [
        {
            id: 1,
            name: "Lavender Dreams",
            description: "Soothing lavender scent to calm your senses",
            price: 14.99,
            image: "../src/assets/lavender.png"
        },
        {
            id: 2,
            name: "Woodland Retreat",
            description: "Earthy pine and cedar forest fragrance",
            price: 16.99,
            image:"../src/assets/woodland.png"
        },
        {
            id: 3,
            name: "Coastal Breeze",
            description: "Fresh ocean and sea salt aromatherapy",
            price: 15.99,
            image: "../src/assets/breeze.webp"
        },
        {
            id: 4,
            name: "Warm Vanilla Comfort",
            description: "Rich, sweet vanilla bean essence",
            price: 13.99,
            image: "../src/assets/vanilla.png"
        }
    ];

    return (
        <div className="page">

             
            

            {/* Hero Section */}
            <header className="hero">
                <h1 className="hero-title">Handcrafted Candles for Every Mood</h1>
                <p className="hero-sub">Discover our artisan candles that transform your space</p>
                <div className="logo-box">
                     
                </div>
                <button
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary"
                >
                    Shop Now
                </button>
            </header>

            {/* Featured Products */}
            <section id="products" className="products">
                <h2 className="section-title">Our Featured Collection</h2>
                <div className="grid-box">
                    {candles.map((candle) => (
                        <div key={candle.id} className="card">
                            <img src={candle.image} alt={candle.name} className="card-img" />
                            <div className="card-body">
                                <h3 className="card-title">{candle.name}</h3>
                                <p className="card-desc">{candle.description}</p>
                                <div className="card-footer">
                                    <span className="price">${candle.price}</span>
                                    <button
                                        onClick={() => alert(`View details for ${candle.name}`)}
                                        className="btn-secondary"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
