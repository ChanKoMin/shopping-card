import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Detail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setItem(data);
    console.log(data.rating.rate);
  };
  return (
    <div className="my-5 w-75 mx-auto d-flex justify-content-between gap-5">
      <img
        src={item.image}
        className="img-thumbnail"
        width="300px"
        height="300px"
        alt=""
      />
      <div className="">
        <h1 className=" fw-bold">{item.title}</h1>
        <p className="badge text-bg-success">{item.category}</p>
        <p className="text-secondary">{item.description}</p>
        <p className="fw-bold">Price: ${item.price}</p>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default Detail;
