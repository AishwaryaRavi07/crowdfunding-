import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h4 className="footer-heading">About Us</h4>
              <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit eleifend massa ac efficitur.</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <p className="footer-text">Email: info@crowdfunding.com</p>
              <p className="footer-text">Phone: +1234567890</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <p className="footer-bottom-text">© 2023 Crowdfunding Platform. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;