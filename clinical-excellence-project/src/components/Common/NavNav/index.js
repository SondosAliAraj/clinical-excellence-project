import React from "react";
import { Dropdown } from "react-bootstrap";

function NavbarWithDropdown() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        My Website
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="default" id="dropdown-basic">
                Dropdown <i className="fas fa-chevron-down"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action/1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#action/2">Action 2</Dropdown.Item>
                <Dropdown.Item href="#action/3">Action 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarWithDropdown;
