import React, { useState } from "react";
import axios from "axios";
import "./AddEmployee.css";

function AddEmployee() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://employee-backend-uk5v.onrender.com/employees", { name, role });
      alert(res.data.message); // Message from backend
      setName("");
      setRole("");
    } catch (err) {
      alert("Failed to add employee");
    }
  };

  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleAdd}>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEmployee;
