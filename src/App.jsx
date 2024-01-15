import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setItems(data);
    console.log(data);
  };
  return (
    <div className="container">
      <Navbar items={items} setItems={setItems} />
      <Routes>
        <Route path="/" element={<Products products={items} />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
