import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarItem from "./NavbarItem";
import Register from "./Register";
import RightIcons from "./RightIcons";

const Navbar = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-md  sticky-xl-top  py-3">
        <div className="container navbarContainer">
          <a href="#home" className="navbar-brand brandSection">
            <h3 className="brandTitle ">MEDSONO</h3>
          </a>
          <NavbarItem />
          <Register />
          <RightIcons />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
