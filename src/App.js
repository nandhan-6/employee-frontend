import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployee employees={employees} setEmployees={setEmployees} />} />
        <Route path="/employees" element={<EmployeeList employees={employees} setEmployees={setEmployees} />} />
        <Route path="/edit/:id" element={<EditEmployee employees={employees} setEmployees={setEmployees} />} />
      </Routes>
    </Router>
  );
}

export default App;
