// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import './App.css';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
// import allFragrances from './pages/Fragrances';

const App=() => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Fragrances" element={<allFragrances />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
