import "./CartItem.css";
import { FaTrash } from "react-icons/fa";

const CartItem = ({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}) => {
  return (
    <div className="cart-item">

      <div className="cart-image">
        <img
          src={item.images[0]}
          alt={item.title}
        />
      </div>

      <div className="cart-details">

        <h3>{item.title}</h3>

        <p className="price">
          ₹{item.finalPrice}
        </p>

        <div className="quantity-box">

          <button
            onClick={() => decreaseQty(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQty(item.id)}
          >
            +
          </button>

        </div>

      </div>

      <div className="cart-right">

        <h3>
          ₹{item.finalPrice * item.quantity}
        </h3>

        <button
          className="delete-btn"
          onClick={() => removeItem(item.id)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
};

export default CartItem;