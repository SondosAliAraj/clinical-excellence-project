// import React, { useState } from "react";
// import "./style.css";

// const Cart = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div className="dropdown">
//       <span className="dropdown-toggle" onClick={toggle}>
//         <div className="cartIconWCount">
//           <i className="bi bi-cart"></i>
//           <span className="badge badge-pill count">0</span>
//         </div>
//       </span>
//       <div
//         className={`dropdown-menu${isOpen ? " show" : ""} dropdown-menu-left`}
//         style={{ backgroundColor: "#ffffff" }}
//       >
//         <div className="cartContainer">
//           <div className="my-2 cartHeader">
//             <div className="cartIconWCount">
//               <i className="bi bi-cart" style={{ color: "#000" }}></i>
//               <span className="badge badge-pill count">0</span>
//             </div>
//             <div className="total">
//               Total: <span className="totalPurchase">$00.00</span>
//             </div>
//           </div>
//           <p className="text-center">
//             Oops!!!
//             <br />
//             No items in cart
//           </p>
//           <button className="btn  btn-primary w-100">Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import Swal from "sweetalert2";

const cart = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    image: "./assets/printed-summer-dress (4) 1-1.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15.99,
    image: "./assets/printed-summer-dress (4) 1-1.png",
  },
];
const Cart = () => {
const generateCartContent = () => {
  let total = cart.reduce((sum, product) => sum + product.price, 0);
  let content = "";
  cart.forEach((product) => {
    content += `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${product.image}" alt="${product.name}" width="50">
        <div>
          <h3 style="font-family: Raleway; font-size:24px" >${product.name}</h3>
          <p style="font-family: Raleway; font-size:18px">Price: $${product.price.toFixed(
            2
          )}</p>
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



  // Function to show the cart popup
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
          <span className="badge badge-pill count">0</span>
        </div>
      </span>
    </>
  );
};

export default Cart;
