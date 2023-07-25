import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import All from "../pages/All";
import Electronics from "../pages/Electronics";
import Jewellery from "../pages/Jewellery";
import MenCloth from "../pages/MenCloth";
import WomenCloth from "../pages/WomenCloth";
import Notfound from "../pages/Notfound";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<All/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/jewelery" element={<Jewellery/>} />
        <Route path="/men" element={<MenCloth/>} />
        <Route  path="/women" element={<WomenCloth/>} />
        <Route  path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
};

export default AppRouter;
