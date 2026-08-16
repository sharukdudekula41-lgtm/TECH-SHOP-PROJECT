import { useState } from "react";
import "./TopProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../data/productsData";

const categories = [
  "All",
  "Headphones",
  "Earbuds",
  "Speakers",
  "Smart Watches",
];

const TopProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="top-products">

      <h2>Top Products</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default TopProducts;