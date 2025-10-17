import React from "react";
import "./Footer.css";
import { assets } from "../../greencart_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-text">
          <img src={assets.logo} alt="" />
          <p>
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>
        <div className="footer-links">
          <div className="links">
            <p>Quick Links</p>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>Best Sellers</li>
              <li>Offers & Deals</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="links">
            <p>Need help?</p>
            <ul>
              <li>Delivery Information</li>
              <li>Return & Refund Policy</li>
              <li>Payment Methods</li>
              <li>Track your order</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="links">
            <p>Follow Us</p>
            <ul>
              <li>
                <i className="fa fa-instagram"></i>Instagram
              </li>
              <li>
                <i className="fa fa-twitter"></i>Twitter
              </li>
              <li>
                <i className="fa fa-facebook"></i>Facebook
              </li>
              <li>
                <i className="fa fa-youtube"></i>You Tube
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright 2025 © GreenCart All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;