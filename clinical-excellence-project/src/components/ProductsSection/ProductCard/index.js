import React from "react";
import "./style.css";

const ProductCard = ({ id, productName, category, image, price }) => {
  return (
    <>
      <div class="card border-0 productCard">
        <div class="card-body">
          <a href="#" className="card-title d-block productCardName">
            {productName}
          </a>
          <a href="#" className="card-title d-block productCardCategory">
            {category}
          </a>
          <img
            src={image}
            className="productImage"
            alt="line"
          />
          <h5 className="price">${price}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
