import "./FeaturedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../data/productsData";

const FeaturedProducts = () => {

  // Show first 8 products
  const featuredProducts = productsData.slice(0, 8);

  return (
    <section className="featured-products">

      <h2 className="section-title">
        Featured Products
      </h2>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default FeaturedProducts;