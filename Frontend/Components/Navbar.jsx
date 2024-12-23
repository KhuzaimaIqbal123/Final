import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/experiences">Experiences</a>
        <a href="/online-experiences">Online Experiences</a>
      </div>
      <div className="navbar-user">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn">Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
