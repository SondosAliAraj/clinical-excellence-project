import React from "react";
import "./style.css";
import { Dropdown } from "react-bootstrap";

const NavbarItem = () => {
  return (
    <>
      {/* <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-menu-button-wide"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v0A1.5 1.5 0 0 1 13.5 4h-11A1.5 1.5 0 0 1 1 2.5zM2.5 5A1.5 1.5 0 0 1 1 6.5v0A1.5 1.5 0 0 1 2.5 8h11A1.5 1.5 0 0 1 15 6.5v0A1.5 1.5 0 0 1 13.5 5h-11z"
        />
        <path
          fill-rule="evenodd"
          d="M1 9.5A1.5 1.5 0 0 1 2.5 8h11A1.5 1.5 0 0 1 15 9.5v0A1.5 1.5 0 0 1 13.5 11h-11A1.5 1.5 0 0 1 1 9.5zM2.5 12A1.5 1.5 0 0 1 1 10.5v0A1.5 1.5 0 0 1 2.5 9h11A1.5 1.5 0 0 1 15 10.5v0A1.5 1.5 0 0 1 13.5 12h-11z"
        />
      </svg> */}

      {/* toggle burger menu */}
      <div className="navbarContainer">
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
        {/* navbar items  */}
        <div
          class="collapse navbar-collapse justify-content-end navbarItemContainer"
          id="main-nav"
        >
          <ul class="navbar-nav itemsText">
            <li class="nav-item">
              <a href="#home" class="nav-link pe-4 navbarItem">
                Home
              </a>
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
                  <Dropdown.Item href="#shop">Cancer center</Dropdown.Item>
                  <Dropdown.Item href="#shop">Outpatient care</Dropdown.Item>
                  <Dropdown.Item href="#shop">Neurosurgery</Dropdown.Item>
                  <Dropdown.Item href="#shop">Women's health</Dropdown.Item>
                  <Dropdown.Item href="#shop">Prenatal care</Dropdown.Item>
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
              <a href="#pages" class="nav-link pe-4 navbarItem">
                Pages
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarItem;
