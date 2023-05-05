import React, { useEffect, useState } from "react";
import UserList from "../UserList";
import ProductsPageHeader from "../components/ProductsPageHeader";
import ProductsTable from "../components/ProductsTable";

const ProductsPage = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://64494fb9e7eb3378ca45df68.mockapi.io/products")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error(error));
//   }, []);
//   console.log(data);

  return (
    <div style={{ fontFamily: "Raleway" }}>
      <ProductsPageHeader />
      <ProductsTable  />
    </div>
  );
};

export default ProductsPage;
