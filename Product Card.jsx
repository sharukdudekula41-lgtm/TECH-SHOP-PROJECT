import "./ProductCard.css";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="wishlist">
        <FaHeart />
      </div>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-info">

        <h3>{product.title}</h3>

        <div className="rating">
          <FaStar />
          <span>{product.rate}</span>
        </div>

        <div className="price">
          <span className="new-price">
            ${product.finalPrice}
          </span>

          <span className="old-price">
            ${product.originalPrice}
          </span>
        </div>

        <button className="cart-btn">
          <FaShoppingCart />
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;