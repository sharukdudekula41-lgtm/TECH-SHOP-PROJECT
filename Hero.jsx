import "./Hero.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <button className="hero-arrow left">
        <FaArrowLeft />
      </button>

      <div className="hero-content">
        <div className="hero-text">
          <p className="subtitle">Tech Shop</p>

          <h1>
            Wireless
            <br />
            Headphones
          </h1>

          <p className="price">
            Starting at <span>$199.99</span>
          </p>

          <Link to="/">
            <button className="shop-btn">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Headphone"
          />
        </div>
      </div>

      <button className="hero-arrow right">
        <FaArrowRight />
      </button>
    </section>
  );
};

export default Hero;