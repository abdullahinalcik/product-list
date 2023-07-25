import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Notfound from "./Notfound";

const WomenCloth = () => {
  const [womenClths, setWomenClths] = useState([]);
  const getItems = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const wmn = data.filter(
          (items) => items.category === "women's clothing"
        );
        setWomenClths(wmn);
      })
      .catch((err) => <Navigate to={<Notfound />} />);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {womenClths.map((womenClths) => (
        <Card
          price={womenClths.price}
          desc={womenClths.description}
          img={womenClths.image}
        />
      ))}
    </>
  );
};

export default WomenCloth;
