import React, { useState } from "react";
import "./style.css";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <span className="dropdown-toggle" onClick={toggle}>
        <div className="cartIconWCount">
          <i className="bi bi-cart"></i>
          <span className="badge badge-pill count">0</span>
        </div>
      </span>
      <div
        className={`dropdown-menu${isOpen ? " show" : ""} dropdown-menu-left`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="cartContainer">
          <div className="my-2 cartHeader">
            <div className="cartIconWCount">
              <i className="bi bi-cart" style={{ color: "#000" }}></i>
              <span className="badge badge-pill count">0</span>
            </div>
            <div className="total">
              Total: <span className="totalPurchase">$00.00</span>
            </div>
          </div>
          <p className="text-center">
            Oops!!!
            <br />
            No items in cart
          </p>
          <button className="btn  btn-primary w-100">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
