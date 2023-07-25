import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Notfound from "./Notfound";

const MenCloth = () => {
  const [menClths, setMenClths] = useState([]);
  const getItems = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const men = data.filter(
          (items) => items.category === "men's clothing"
        );
        setMenClths(men);
      })
      .catch((err) => <Navigate to={<Notfound />} />);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {menClths.map((menClths) => (
        <Card
          price={menClths.price}
          desc={menClths.description}
          img={menClths.image}
        />
      ))}
    </>
  );
};

export default MenCloth