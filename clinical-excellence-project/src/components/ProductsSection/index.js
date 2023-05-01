import React from "react";
import "./style.css";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <>
      <section id="shop">
        <div className="container shopContainer">
          <div className="row rowContainer">
            <div className="mainContent">
              <h2 className="sectionTitle1 ms-1">Featured Products</h2>
              <h3 className="sectionTitle2">BESTSELLER PRODUCTS</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
                <ProductCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
