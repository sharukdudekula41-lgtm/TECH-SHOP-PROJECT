import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-info">

      <h1>{product.title}</h1>

      <div className="rating">

        <FaStar />
        <span>{product.rate}</span>

      </div>

      <div className="price">

        <span className="new-price">
          ₹{product.finalPrice}
        </span>

        <span className="old-price">
          ₹{product.originalPrice}
        </span>

      </div>

      <p className="description">
        {product.description}
      </p>

      <h4 className="stock">
        Availability :
        <span> In Stock</span>
      </h4>

      <div className="quantity">

        <button onClick={decreaseQty}>-</button>

        <span>{quantity}</span>

        <button onClick={increaseQty}>+</button>

      </div>

      <div className="buttons">

        <button className="cart-btn">
          <FaShoppingCart />
          Add To Cart
        </button>

        <button className="buy-btn">
          Buy Now
        </button>

      </div>

    </div>
  );
};

export default ProductInfo;