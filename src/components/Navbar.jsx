import { Link } from 'react-router-dom';
import "../components/styles/Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
            <div className="banner">
                <p>🎉 15% off for new subscribers! 🎉</p>
            </div>
                
                <div className="nav-links">
                    <Link to="/" className="NavPages ">Home</Link>
                    <Link to="/about" className="NavPages ">About</Link>
                    <Link to="/contact" className="NavPages ">Contact</Link>
                    <Link to="/contact" className="NavPages ">Studio</Link>
                    <Link to="/contact" className="NavPages ">Fragrances</Link>
                    
                </div>
                <div className="logo-container">
                    <img 
                        src="./src/assets/candleLogo.jpg"
                        alt='logo'
                        className='navbar-logo'
                    />
                    </div>
            </div>
        </nav>
    );
};
export default Navbar;