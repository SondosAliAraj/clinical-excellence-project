import React, { useState, useEffect } from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);
  return (
    <>
      <section id="shop">
        <div className="container shopContainer">
          <div className="rowContainer">
            <div className="row ">
              <div className="mainContent">
                <h2 className="sectionTitle1 ms-1">Featured Products</h2>
                <h3 className="sectionTitle2">BESTSELLER PRODUCTS</h3>
              </div>
            </div>
          </div>

          <div className="d-md-block d-none">
            <div className="row">
              {data.map(({ id, name, category, image, price }) => (
                <div className="col-md-3 columnCard">
                  <ProductCard
                    productName={name}
                    category={category}
                    image={image}
                    price={price}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="d-block d-md-none">
            <Carousel>
              {data.map(({ id, name, category, image, price }) => (
                <Carousel.Item key={id}>
                  <ProductCard
                    productName={name}
                    category={category}
                    image={image}
                    price={price}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
