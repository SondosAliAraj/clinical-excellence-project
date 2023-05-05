import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const generateCartContent = () => {
    let total = cartItems.reduce(
      (sum, product) => sum + Number(product.price),
      0
    );
    let content = "";
    cartItems.forEach((product, index) => {
      content += `
        <div style="display: flex; align-items: center;text-align:left; gap: 10px;">
          <img src="${product.image}" alt="${product.name}" width="100">
          <div>
            <h3 style="font-family: Raleway; font-size:24px" >${
              product.name
            }</h3>
            <p style="font-family: Raleway; font-size:18px">Price: $${Number(
              product.price
            ).toFixed(2)}</p>
          </div>
        </div>
        <hr>
      `;
    });
    content += `
      <div style="text-align: right">
        <p style="font-family: Raleway; font-size:18px; font-weight:bold">Total: $${total.toFixed(
          2
        )}</p>
      </div>
    `;
    return content;
  };

  const showCartPopup = () => {
    Swal.fire({
      title: "Your Cart",
      html: generateCartContent(),
      confirmButtonText: "Checkout",
      showCancelButton: true,
      cancelButtonText: "Close",
      focusCancel: true,
      customClass: {
        title: "cart-popup-title",
        confirmButton: "cart-popup-confirm",
        cancelButton: "cart-popup-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Checkout clicked");
      }
    });
  };

  return (
    <>
      <span className="dropdown-toggle" onClick={showCartPopup}>
        <div className="cartIconWCount">
          <i className="bi bi-cart"></i>
          <span className="badge badge-pill count">{cartItems.length}</span>
        </div>
      </span>
    </>
  );
};

export default Cart;
