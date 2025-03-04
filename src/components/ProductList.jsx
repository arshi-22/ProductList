import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/shirt.jpg",
  },
  {
    id: 2,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/black_jacket.jpg",
  },
  {
    id: 3,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/blue_hoodie.jpg",
  },
  {
    id: 4,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/black_hoodie.jpg",
  },
  {
    id: 5,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/shirt.jpg",
  },
  {
    id: 6,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/black_jacket.jpg",
  },
  {
    id: 7,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/blue_hoodie.jpg",
  },
  {
    id: 8,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/black_hoodie.jpg",
  },
  {
    id: 9,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/shirt.jpg",
  },
  {
    id: 10,
    title: "PRODUCT TITLE HERE",
    price: "£250",
    image: "/assests/black_jacket.jpg",
  },
];

const ProductList = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const toggleSelection = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container desktop-view">
      <div className="header">
        <button className="nav-button">←</button>
        <h2 className="title">SELECT PRODUCTS</h2>
        <button className="nav-button">✕</button>
      </div>

      <div className="progress-bar">
        <div className="progress progress1"></div>
        <div className="progress progress2"></div>
        <div className="progress progress3"></div>
        <div className="progress progress4"></div>
      </div>
      <div className="products-count">
        <h4 className="total-products">{products.length} PRODUCTS</h4>
        <h4 className="selected-products">{selected.length} SELECTED</h4>
      </div>
      <div className="product-grid desktop-grid">
        {products.map((product) => (
          <div
            className="product-details"
            key={product.id}
            onClick={() => goToDetails(product.id)}
          >
            <div className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div
                className="checkmark"
                onClick={(e) => {
                  toggleSelection(product.id);
                  e.stopPropagation();
                }}
              >
                {selected.includes(product.id) && (
                  <CheckIcon size={15} className="icon" />
                )}
              </div>
            </div>
            <div className="product-info">
              <p>{product.title}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <button className="next-button">NEXT</button>
      </div>
    </div>
  );
};
export default ProductList;
