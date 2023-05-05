// import React, { useState, useEffect } from "react";
// import "./style.css";
// import AddProductForm from "../AddProductForm";
// import UpdateProductForm from "../UpdateProductForm";

// const ProductsTable = () => {
//   const [data, setData] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setProducts(data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const [products, setProducts] = useState([]);

//   console.log("hiiiii", products);
//   console.log("data", data);

//   const deleteProduct = (id) => {
//     fetch(`https://64494fb9e7eb3378ca45df68.mockapi.io/products/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         response.json();
//       })
//       .then((data) => {
//         console.log(data); // log the response from the server
//       })
//       .catch((error) => console.error(error));
//   };

//   const addProduct = (product) => {
//     setProducts([...products, product]);
//   };
//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-9">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Image</th>
//                   <th>Category</th>
//                   <th>Price</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product.id}>
//                     <td>{product.name}</td>
//                     <td>
//                       <img src={product.image} style={{ width: "30%" }} />
//                     </td>
//                     <td>{product.category}</td>
//                     <td>${product.price}</td>
//                     <td>
//                       <button className="btn btn-primary">
//                         <i class="bi bi-table"></i>
//                       </button>
//                       <button
//                         className="btn btn-success mx-2"
//                         onClick={toggleForm}
//                       >
//                         <i class="bi bi-pencil-square"></i>
//                       </button>
//                       {showForm && (
//                         <UpdateProductForm
//                           id={product.id}
//                           productInfo={product}
//                         />
//                       )}
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => deleteProduct(product.id)}
//                       >
//                         <i class="bi bi-trash3-fill"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="col-md-3">
//             <AddProductForm addProduct={addProduct} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsTable;

import React, { useState, useEffect } from "react";
import "./style.css";
import AddProductForm from "../AddProductForm";
import UpdateProductForm from "../UpdateProductForm";

const ProductsTable = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [products, setProducts] = useState([]);

  console.log("hiiiii", products);
  console.log("data", data);

  const deleteProduct = (id) => {
    fetch(`https://64494fb9e7eb3378ca45df68.mockapi.io/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data); // log the response from the server
      })
      .catch((error) => console.error(error));
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
                      <button className="btn btn-primary">
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
                        onClick={() => deleteProduct(product.id)}
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                      {showForm && selectedProductId === product.id && (
                        <UpdateProductForm
                          id={product.id}
                          productInfo={product}
                          onUpdate={handleUpdate}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
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
