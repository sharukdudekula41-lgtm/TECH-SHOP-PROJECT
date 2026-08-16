import { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery">

      <div className="thumbnail-container">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`product-${index}`}
            className={
              selectedImage === image
                ? "thumbnail active"
                : "thumbnail"
            }
            onClick={() => setSelectedImage(image)}
          />
        ))}

      </div>

      <div className="main-image-container">

        <img
          src={selectedImage}
          alt="Product"
          className="main-image"
        />

      </div>

    </div>
  );
};

export default ProductGallery;import { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery">

      <div className="thumbnail-container">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`product-${index}`}
            className={
              selectedImage === image
                ? "thumbnail active"
                : "thumbnail"
            }
            onClick={() => setSelectedImage(image)}
          />
        ))}

      </div>

      <div className="main-image-container">

        <img
          src={selectedImage}
          alt="Product"
          className="main-image"
        />

      </div>

    </div>
  );
};

export default ProductGallery;