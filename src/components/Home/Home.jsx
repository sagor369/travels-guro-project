import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Home = () => {
  return (
    <div className="bg-cyan-500 pt-10">
      <div className='   max-w-7xl mx-auto  bg-[url("../../assets/images/Rectangle_1.png")]'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
