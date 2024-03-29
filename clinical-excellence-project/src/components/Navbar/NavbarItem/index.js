import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Dropdown } from "react-bootstrap";

const NavbarItem = () => {
  return (
    <>
      {/* toggle burger menu */}
      <div className="navbarContainer">
        <div
          class="collapse navbar-collapse justify-content-end navbarItemContainer"
          id="main-nav"
        >
          <ul class="navbar-nav itemsText">
            <li class="nav-item">
              <Link to="/" className="text-decoration-none">
                <a href="" class="nav-link pe-4 navbarItem">
                  Home
                </a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Dropdown className="border-0">
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-basic"
                  className="hide-caret"
                >
                  {/* <a href="#shop" class="nav-link pe-4 navbarItem"> */}
                  Shop
                  <i className="bi bi-chevron-down d-none d-lg-inline"></i>
                  {/* </a> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/products">Cancer center</Dropdown.Item>
                  <Dropdown.Item href="/products">
                    Outpatient care
                  </Dropdown.Item>
                  <Dropdown.Item href="/products">Neurosurgery</Dropdown.Item>
                  <Dropdown.Item href="/products">Women's health</Dropdown.Item>
                  <Dropdown.Item href="/products">Prenatal care</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link pe-4 navbarItem">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#blog" class="nav-link pe-4 navbarItem">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link pe-4 navbarItem">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <Link to="/pages" className="text-decoration-none">
                <a href="" class="nav-link pe-4 navbarItem">
                  Pages
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarItem;
