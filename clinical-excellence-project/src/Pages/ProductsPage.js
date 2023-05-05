import React, { useEffect, useState } from "react";
import UserList from "../UserList";
import ProductsPageHeader from "../components/ProductsPageHeader";
import ProductsTable from "../components/ProductsTable";

const ProductsPage = () => {
  return (
    <div style={{ fontFamily: "Raleway" }}>
      <ProductsPageHeader />
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
