import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-section">
          <h2 className="footer-logo">Tech-Shop</h2>

          <p>
            Your one-stop destination for premium
            headphones, earbuds, smart watches,
            speakers and accessories.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

          </ul>

        </div>

        {/* Categories */}

        <div className="footer-section">

          <h3>Categories</h3>

          <ul>

            <li>Headphones</li>
            <li>Earbuds</li>
            <li>Speakers</li>
            <li>Smart Watches</li>

          </ul>

        </div>

        {/* Newsletter */}

        <div className="footer-section">

          <h3>Newsletter</h3>

          <p>
            Subscribe to get latest offers and updates.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Tech-Shop. All Rights Reserved.
        </p>

        <div className="social-icons">

          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />

        </div>

      </div>

    </footer>
  );
};

export default Footer;