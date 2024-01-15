/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="d-flex flex-wrap gap-1 my-4">
      {products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Products;
