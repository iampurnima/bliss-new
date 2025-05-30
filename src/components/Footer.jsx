// import {FaFacebookF} from "react-icons/fa";
// import { FaTiktok } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import "../components/styles/Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import React,{useState} from "react";
import "../components/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1W3Fq2UxtU/"
              target="_blank"
              rel="noopener noreferrer">
                <FaFacebookF/>
            </a>
            <a
              href="https://www.instagram.com/candlesbyblissy?igsh=MXV0aXhrNXRibGVkZA=="
              target="_blank"
              rel="noopener noreferrer">
                <FaInstagram/>
            </a>
            <a
              href="http://tiktok.com/@blisse06"
              target="_blank"
              rel="noopener noreferrer">
                <FaTiktok/>
            </a>
            
          </div>
        </div>


        <div className="footer-section">
          <h4>Quick Links</h4>
        </div>
        <div className="footer-section">
          <p className="newsletter-text">
          Sign up to receive exclusive discounts, stay up to date with the latest releases, and learn a little bit about… us!
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter email" />
            <button type="submit">→</button>
          </form>

        </div>

        
       
      </div>

      <p className="copyright">
        © 2024 BlisseCandle Creations. All Rights Reserved.
      </p>
    </footer>
  );
};





export default Footer;