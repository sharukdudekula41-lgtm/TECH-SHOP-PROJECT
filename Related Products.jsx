import "./RelatedProducts.css";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../data/productsData";

const RelatedProducts = ({ product }) => {

  const relatedProducts = productsData
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <section className="related-products">

      <h2>Related Products</h2>

      <div className="related-grid">

        {relatedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedProducts;