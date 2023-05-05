import React, { useState } from "react";
import "./style.css";
import AddProductForm from "../AddProductForm";

const ProductsPageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <div className="pHeaderContainer">
          <h3 className="font-weight-bold">Products List</h3>
        </div>
      </div>
    </>
  );
};

export default ProductsPageHeader;
