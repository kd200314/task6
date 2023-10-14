import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navbarStyles = {
    backgroundColor: "#2196F3",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navbarBrandStyles = {
    color: "white",
    textDecoration: "none",
    fontSize: "24px",
  };

  const navStyles = {
    display: "flex",
    gap: "20px",
  };

  const navLinkStyles = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav style={navbarStyles}>
      <Link to="/" style={navbarBrandStyles} className="navbar-brand">
        PROFILE
      </Link>
      <div style={navStyles} className="nav">
        <Link to="/" style={navLinkStyles} className="nav-link">
          Home
        </Link>
        <Link to="/about" style={navLinkStyles} className="nav-link">
          About Me
        </Link>
        <Link to="/contact" style={navLinkStyles} className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
