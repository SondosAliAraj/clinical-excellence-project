import React, { useState } from "react";

const UpdateProductForm = ({ id, productInfo, onUpdate, onClose }) => {
  const [name, setName] = useState(productInfo.name);
  const [image, setImage] = useState(productInfo.image);
  const [category, setCategory] = useState(productInfo.category);
  const [price, setPrice] = useState(productInfo.price);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = {
      name,
      image,
      category,
      price,
    };

    fetch(`https://64494fb9e7eb3378ca45df68.mockapi.io/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onUpdate(data); // call the onUpdate callback with the updated data
      })
      .then(onClose())
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control my-3"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control "
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="file"
          className="form-control-file my-3"
          //   id="image"
          //   onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image (for test purpose):</label>
        <input
          type="text"
          className="form-control-file my-3"
          id="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary my-3">
        Save
      </button>
    </form>
  );
};

export default UpdateProductForm;
