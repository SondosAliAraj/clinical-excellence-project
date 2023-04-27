import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light sticky-xl-top bg-light py-3">
          <div className="container">
            <a href="#home" className="navbar-brand brandSection">
              <span className="brandTitle ">MEDSONO</span>
            </a>
            {/* <NavbarItem /> */}
          </div>
        </nav>
      </>
    );
}
 
export default Navbar;