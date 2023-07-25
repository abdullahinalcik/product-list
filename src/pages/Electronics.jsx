import React from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Notfound from "./Notfound";
import { useEffect } from "react";

const Electronics = () => {
  const [elec, setElec] = useState([]);
  const getItems = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const electronics = data.filter(
          (item) => item.category === "electronics"
        );
        setElec(electronics);
      })
      .catch((err) => <Navigate to={<Notfound />} />);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {elec.map((elec) => (
        <Card price={elec.price} desc={elec.description} img={elec.image} />
      ))}
    </>
  );
};

export default Electronics;
