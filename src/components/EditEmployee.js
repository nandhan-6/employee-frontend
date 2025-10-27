import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditEmployee.css";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch employee details by ID
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`https://employee-backend-uk5v.onrender.com/employees/${id}`);
        setName(res.data.name);
        setRole(res.data.role);
      } catch (err) {
        alert("Failed to fetch employee");
      }
    };
    fetchEmployee();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://employee-backend-uk5v.onrender.com/employees/${id}`, {
        name,
        role,
      });
      alert(res.data.message); // backend message
      navigate("/employees");
    } catch (err) {
      alert("Failed to update employee");
    }
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditEmployee;
