import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">Tech-Shop</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <div className="nav-icons">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Products..."
          />
        </div>

        <Link to="/login">
          <FaUser />
        </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span>0</span>
        </Link>

        <button className="menu-btn">
          <FaBars />
        </button>

      </div>

    </header>
  );
};

export default Navbar;