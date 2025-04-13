import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../components/styles/Navbar.css";
import React, { useState } from 'react';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Ycan add your search logic here (e.g., filter, API call)
  };
    return (
        <nav>
             <div className="banner">
                <p className="offer">🎉 15% off for new subscribers! 🎉</p>
            </div>
            
            <div className="nav-container">
            <div className="logo-container">
                    <img 
                        src="./src/assets/BlisseLogo1.png"
                        alt='logo'
                        className='navbar-logo'
                    />
                    </div>
                <div className="nav-links">
                    <Link to="/" className="NavPages ">Home</Link>
                    <Link to="/about" className="NavPages ">About</Link>
                    <Link to="/contact" className="NavPages ">Contact</Link>
                    <Link to="/contact" className="NavPages ">Studio</Link>
                    <Link to="/contact" className="NavPages ">Fragrances</Link>
                    
                </div>
                <div className="search-container">
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="Search anything..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </div>
                     
                    <div className="cart-icon">
                        <Link to="/cart">
                            <FaShoppingCart size={24} color="#555" />
                        </Link>
                        </div>

             </div>    
            </div>
        </nav>
    );
};
export default Navbar;