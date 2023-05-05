import React from "react";
import "./style.css";
import SearchBox from "../../Common/SearchBox";
import Cart from "../../Cart";
import { CartProvider } from "../../../context/CartContext";

const RightIcons = () => {
  return (
    <>
      <div className="iconsContainer">
        <i class="bi bi-search"></i>

        <Cart />

        <span>
          {/* <i class="bi bi-heart d-none d-lg-inline"></i>
          <span className="number d-none d-lg-inline">1</span> */}
          <div className="cartIconWCount">
            <i class="bi bi-heart d-none d-lg-inline"></i>
            <span className="badge badge-pill d-none d-lg-inline count">0</span>
          </div>
        </span>
      </div>
    </>
  );
};

export default RightIcons;
