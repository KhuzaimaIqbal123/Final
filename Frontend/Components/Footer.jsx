// Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#support">Support</a>
                <a href="#community">Community</a>
                <a href="#hosting">Hosting</a>
                <a href="#about">About</a>
            </div>
            <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
