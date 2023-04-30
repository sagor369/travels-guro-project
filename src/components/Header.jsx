import React from "react";
import logoImg from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="h-14 w-32 ">
        <img className="w-full h-full" src={logoImg} alt="" />
      </div>
      <nav className="flex gap-10 justify-between items-center">
        <input
          className="py-2 px-4 w-96"
          placeholder="search"
          type="search"
          name="search"
          id=""
        />
        <NavLink to="/">News</NavLink>
        <NavLink to="/destination">Destinations </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button className="btn bg-orange-400 py-2 px-7 rounded">
          <Link to="login">Login</Link>
        </button>
      </nav>
    </div>
  );
};

export default Header;
