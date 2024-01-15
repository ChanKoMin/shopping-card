import React, { useState } from "react";
import { CiShop } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = ({ items, setItems }) => {
  console.log(items);
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.prventDefault();
    const filterProduct = items.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setItems(filterProduct);
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <CiShop className=" fs-1" />
        </Link>
        <form className="d-flex" role="search" onSubmit={submitHandler}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
