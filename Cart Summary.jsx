import "./CartSummary.css";

const CartSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.finalPrice * item.quantity,
    0
  );

  const shipping = subtotal > 5000 ? 0 : 199;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-summary">

      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span>
          {shipping === 0 ? "Free" : `₹${shipping}`}
        </span>
      </div>

      <div className="summary-row">
        <span>GST (18%)</span>
        <span>₹{tax.toFixed(2)}</span>
      </div>

      <hr />

      <div className="summary-row total">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>

      <div className="coupon">

        <input
          type="text"
          placeholder="Enter Coupon Code"
        />

        <button>
          Apply
        </button>

      </div>

      <button className="checkout-btn">
        Proceed To Checkout
      </button>

    </div>
  );
};

export default CartSummary;