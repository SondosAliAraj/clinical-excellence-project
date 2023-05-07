import React, { useState, useEffect } from "react";
import "./style.css";
import AddProductForm from "../AddProductForm";
import UpdateProductForm from "../UpdateProductForm";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";

const ProductsTable = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [updateProductId, setUpdateProductId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("hiiiii", products);
  console.log("data", data);

  const deleteProduct = (id) => {
    fetch(`https://64494fb9e7eb3378ca45df68.mockapi.io/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.json();
      })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const handlePreview = (product) => {
    Swal.fire({
      title: product.name,
      html: `
      <img src="${product.image}" alt="${product.name}" width="200">
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> $${product.price}</p>
    `,
      confirmButtonText: "Close",
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const toggleForm = (id) => {
    setSelectedProductId(id);
    setShowForm(!showForm);
  };
  const handleUpdate = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setUpdateProductId(updatedProduct.id);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {loading ? (
                <Loader />
              ) : (
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>
                        <img src={product.image} style={{ width: "30%" }} />
                      </td>
                      <td>{product.category}</td>
                      <td>${product.price}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handlePreview(product)}
                        >
                          <i class="bi bi-table"></i>
                        </button>
                        <button
                          className="btn btn-success mx-2"
                          onClick={() => toggleForm(product.id)}
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                        {showForm && selectedProductId === product.id && (
                          <UpdateProductForm
                            id={product.id}
                            productInfo={product}
                            onUpdate={handleUpdate}
                            onClose={toggleForm}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          <div className="col-md-3">
            <AddProductForm addProduct={addProduct} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsTable;
