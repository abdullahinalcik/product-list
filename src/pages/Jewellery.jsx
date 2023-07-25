import React from 'react'
import Card from '../Components/Card'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Notfound from "./Notfound";
import { useEffect } from "react";

const Jewellery = () => {
  const [jewelery, setJewelery] = useState([]);
  const getItems = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const jew = data.filter(
          (item) => item.category === "jewelery"
        );
        setJewelery(jew);
      })
      .catch((err) => <Navigate to={<Notfound />} />);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
  <>
    {jewelery.map((jewelery) => (
      <Card price={jewelery.price} desc={jewelery.description} img={jewelery.image} />
    ))}
  </>
  )
}

export default Jewellery