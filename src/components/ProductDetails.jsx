import { useState } from "react";

import { ChevronDown, Info } from "lucide-react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const maxLength = 100;
  const navigate = useNavigate();
  const [title, setTitle] = useState("ROUND NECK T-SHIRT");
  const [description, setDescription] = useState(
    "This tee was created to be a versatile and stylish companion for all your casual appearances. With its uniquely textured, thick microfiber-knit fabric, this t-shirt bears a premium, soft feel that remains lightweight and highly breathable - the perfect combo for a hot day or layering."
  );

  return (
    <div className="product-container">
      <div className="header">
        <button className="nav-button" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="title">EDIT PRODUCTS</h2>
      </div>
      <div className="products ">
        <h4> PRODUCTS IMAGES</h4>
        <h4 className="text-underline"> SORT</h4>
      </div>
      <div className="card">
        <div className="content">
          <div className="product-images">
            <div className="image-container">
              <img
                src="/huddie_black.jpg"
                alt="Product Image"
                className="product-image"
              />
            </div>
            <div className="images">
              <img
                src="/product_img1.jpg"
                alt="Product Image"
                className="product-image"
              />
              <img
                src="/product_img2.jpg"
                alt="Product Image"
                className="product-image"
              />
              <img
                src="/product_img2.jpg"
                alt="Product Image"
                className="product-image"
              />
            </div>
          </div>
          <h4 className="text-underline">EDIT</h4>
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div
            className={`input-group ${
              description.length >= maxLength ? "limit" : ""
            }`}
          >
            <label>Description</label>
            <textarea
              maxLength={maxLength}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div
              className={`char-count ${
                description.length >= maxLength ? "limit" : ""
              }`}
            >
              {description.length} / {maxLength}
            </div>
          </div>
          <div className="details">
            <div className="items">
              <span>PRODUCT DETAIL</span> <span>+</span>
            </div>
            <div className="items">
              <span>SHIPPING</span>
              <span>+</span>
            </div>
            <div className="items">
              <span>CONTACT</span>
              <span>+</span>
            </div>
          </div>

          <div className="input-group circle-pricing">
            <label>CIRCLE PRICING (INCOMPLETE)</label>
            <input type="text" placeholder="SELECT" />
            <div className="min-max-info">
              <Info className="info-icon" size={18} />
              <span className="info-text">Min:$20 - MAX:$500</span>
            </div>
          </div>
          <ChevronDown className="arrow-down" />
          <div className="pulic-price">
            <label>PUBLIC PRICING</label>
            <input
              type="text"
              className="public-pricing"
              placeholder="+10% higher than circle pricing"
            />
          </div>
          <div className="input-group quantity">
            <label>QUANTITY (INCOMPLETE)</label>
            <input type="text" placeholder="TAP TO SELECT" />
            <div className="min-max-info">
              <Info className="info-icon" size={18} />
              <span className="info-text">Min:$51 - MAX:$500</span>
            </div>
          </div>

          <p className="info">
            Projected Revenue Based on MOQ
            <br /> <strong className="circle-pricing">$150</strong>
          </p>

          <button className="save-button">SAVE</button>
          <button className="remove-button">REMOVE FROM DROP</button>
        </div>
      </div>
    </div>
  );
}
