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
      <nav className=" navbar navbar-expand-lg  sticky-xl-top   navbarContainerSmallScreen">
        <div className="container navbarContainer order-first">
          <a href="#home" className="navbar-brand brandSection">
            <h3 className="brandTitle ">MEDSONO</h3>
          </a>
          <div className="iconsContainer">
            <NavbarItem />
            <Register />
            <RightIcons />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
