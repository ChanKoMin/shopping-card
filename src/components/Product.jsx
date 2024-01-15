import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, description, image }) => {
  return (
    <div className="card p-4" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top" height="300px" alt="Shopping" />
      <div className="card-body">
        <h5 className="card-title text-truncate fw-bold">{title}</h5>
        <p className="card-text text-truncate text-secondary">{description}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Add To Cart</button>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
