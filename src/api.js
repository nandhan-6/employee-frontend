import axios from "axios";

// 👇 This is the line you mentioned
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// export helper functions for CRUD operations
export const getEmployees = () => axios.get(`${API_URL}/employees`);
export const addEmployee = (employee) => axios.post(`${API_URL}/employees`, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/employees/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employees/${id}`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/employees/${id}`);
