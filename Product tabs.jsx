import { useState } from "react";
import "./ProductTabs.css";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-tabs">

      <div className="tab-buttons">

        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "specifications" ? "active" : ""}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </button>

        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>

      </div>

      <div className="tab-content">

        {activeTab === "description" && (
          <div>
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div>
            <h3>Specifications</h3>

            <ul>
              <li>Brand : {product.brand}</li>
              <li>Category : {product.category}</li>
              <li>Warranty : 1 Year</li>
              <li>Bluetooth : 5.3</li>
              <li>Battery Life : 40 Hours</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3>Customer Reviews</h3>

            <p>⭐⭐⭐⭐⭐ Amazing sound quality.</p>
            <p>⭐⭐⭐⭐ Comfortable for daily use.</p>
            <p>⭐⭐⭐⭐⭐ Best value for money.</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProductTabs;