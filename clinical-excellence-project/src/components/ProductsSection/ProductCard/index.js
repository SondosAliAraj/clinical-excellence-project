import React,{useContext} from "react";
import "./style.css";
import { CartContext } from "../../../context/CartContext";

const ProductCard = ({ id, productName, category, image, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id,
      name: productName,
      price,
      image,
    });
    console.log("added to cart !!!!!",{id,productName,price,image});
  };
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
          <img src={image} className="productImage" alt="line" />

          <div className="addToCartContainer d-flex flex-row">
            <h5 className="price">${price}</h5>
            <i
              class="bi bi-cart-plus addToCartBtn"
              onClick={handleAddToCart}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
