import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EmployeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("https://employee-backend-uk5v.onrender.com/employees");
      setEmployees(res.data);
    } catch (err) {
      alert("Failed to fetch employees");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://employee-backend-uk5v.onrender.com/employees/${id}`);
      alert(res.data.message); // backend message
      fetchEmployees(); // refresh list
    } catch (err) {
      alert("Failed to delete employee");
    }
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="edit-btn">
                  Edit
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="add-link">Add New Employee</Link>
    </div>
  );
}

export default EmployeeList;
