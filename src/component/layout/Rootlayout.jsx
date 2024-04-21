import React from "react";
import Home from "../../pages/Home";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Header";

const Rootlayout = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
        <Outlet/>
    </div>
  );
};

export default Rootlayout;
