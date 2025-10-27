import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading"> Welcome to the Employee Management System</h1>
      {/* <p className="home-text">
        Welcome to the Employee Management System! <br />
        Manage your employees efficiently — Add, View, Edit, or Delete records.
      </p> */}
      {/* <div className="home-buttons">
        <Link to="/add" className="home-btn">Add Employee</Link>
        <Link to="/employees" className="home-btn">View Employees</Link>
      </div> */}
    </div>
  );
};

export default Home;
