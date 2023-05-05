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
      <nav className=" navbar navbar-expand-lg  sticky-lg-top   navbarContainerSmallScreen" style={{backgroundColor:"#6791b8"}}>
        <div
          className="container navbarContainer"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <a href="/" className="navbar-brand brandSection">
            <h3 className="brandTitle ">MEDSONO</h3>
          </a>
          <div className="d-md-block d-none">
            <NavbarItem />
          </div>
          <div className="iconsContainer">
            <div className="navbarTogglerButton">
              <button
                class="navbar-toggler navbarToggleMenu"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main-nav"
                aria-controls="main-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <Register />
            <RightIcons />
          </div>

          <div className="d-block d-md-none">
            <NavbarItem />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
