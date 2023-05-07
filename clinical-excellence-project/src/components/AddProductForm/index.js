import React, { useState } from "react";
import "./style.css";

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    const imageSrc = `./assets/${e.target.files[0].name}`;
    setImage(imageSrc);
    console.log("add image", setImage(`./assets/${e.target.files[0].name}`));
    console.log("add image", `./assets/${e.target.files[0].name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      name,
      category,
      image,
      price,
    });
    setName("");
    setCategory("");
    setPrice("");
    setImage(null);
    fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, category, image, price }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((response) => {
        if (response.ok) {
          window.location.reload(); // refresh the page
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 mx-auto w-100">
          <h4 className="font-weight-bold text-center mb-4">Add Product</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                className="form-control-file my-3"
                id="image"
                onChange={handleImageChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary my-3 ">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
