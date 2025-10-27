import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewEmployee() {
  const { id } = useParams();
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`)
      .then(res => setEmp(res.data));
  }, [id]);

  if (!emp) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employee Details</h2>
      <p><b>ID:</b> {emp.id}</p>
      <p><b>Name:</b> {emp.name}</p>
      <p><b>Age:</b> {emp.age}</p>
      <p><b>Department:</b> {emp.department}</p>
    </div>
  );
}

export default ViewEmployee;
