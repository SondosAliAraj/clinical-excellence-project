import React from "react";
import "./style.css";

const ProductCard = ({ id, productName, category, image, price }) => {
  return (
    <>
      <div class="card border-0 productCard">
        <div class="card-body">
          <a href="#" className="card-title d-block productCardName">
            Cancer center
          </a>
          <a href="#" className="card-title d-block productCardCategory">
            Orthopedics
          </a>
          <img
            src="../../assets/printed-summer-dress (4) 1.png"
            className="productImage"
            alt="line"
          />
          <h5 className="price">$6.48</h5>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
