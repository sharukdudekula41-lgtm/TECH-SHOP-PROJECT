import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ products = [], onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    onSearch(filtered);
  };

  return (
    <div className="search-container">

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleChange}
        />

      </div>

    </div>
  );
};

export default SearchBar;