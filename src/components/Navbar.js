import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/employees" className="nav-link">View Employees</Link>
      <Link to="/add" className="nav-link">Add Employee</Link>
    </nav>
  );
};

export default Navbar;
