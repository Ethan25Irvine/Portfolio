import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"


function NavTabs () {
  const location= useLocation();
    
    return (
<nav className="navbar navbar-expand-lg ">
      {/* <Link className="navbar-brand" to="/">
        Ethan Irvine
      </Link> */}
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active": "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active": "nav-link"}>
              Portfolio
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active": "nav-link"}>
              Contact
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active": "nav-link"}>
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active": "nav-link"}>
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default NavTabs;