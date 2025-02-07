import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import "./style.css";

const products = [
  {
    id: 1,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 2,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 3,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 4,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 5,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 6,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 7,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 8,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 9,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
  {
    id: 10,
    title: "Product Title Here",
    price: "£250",
    image: "/hoodie_mockup.jpg",
  },
];

const ProductList = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="container desktop-view">
      {/* Header */}
      <div className="header">
        <button className="nav-button">←</button>
        <h2 className="title">SELECT PRODUCTS</h2>
        <button className="nav-button">✕</button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress"></div>
      </div>

      {/* Product List */}
      <div className="product-grid desktop-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${
              selected.includes(product.id) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <p>{product.title}</p>
              <p className="price">{product.price}</p>
            </div>

            <div className="checkmark">
              {selected.includes(product.id) && (
                <CheckIcon size={10} className="icon" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="footer">
        <button className="next-button">NEXT</button>
      </div>
    </div>
  );
};
export default ProductList;
