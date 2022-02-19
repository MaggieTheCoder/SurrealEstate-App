import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <header>
      <div className="container container-nav">
        <img className="navbar-logo" src={logo} alt="logo" />
        <nav>
          <ul className="navbar-links">
            <li className="navbar-links-item">
              <Link className="item" to="/">
                View Properties{" "}
              </Link>
            </li>
            <li className="navbar-links-item">
              <Link className="item" to="/add-property">
                Add a Property
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
