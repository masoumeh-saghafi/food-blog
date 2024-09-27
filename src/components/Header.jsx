import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-light">
      <header className="text-center  bg-light m-0">
        <Link to='/' >Cube Blog</Link>
        <p className="m-0 p-0 ">--- Clean & Modern Theme ---</p>
      </header>

      <hr />

      <NavBar />
    </div>
  );
};

export default Header;
