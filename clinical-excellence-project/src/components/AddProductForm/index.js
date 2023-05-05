import React, { useState } from "react";



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
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, category, image, price });
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
      .catch((error) => console.error(error));
  };

  return (
    <div className="container ms-5 flex-column">
      <h4 className="font-weight-bold">Add Product</h4>
      <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
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
          <label htmlFor="image">image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
