import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './students.css';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/students', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setStudents(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="student-table-container">
      <div className="add-student-button">
        <Link to="/AddStudent" className="add-student-link">Add Student</Link>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Department ID</th>
            <th>Campus ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact-number</th>
            <th>RFID</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.Student_id}>
              <td>{student.Student_id}</td>
              <td>{student.Department_id}</td>
              <td>{student.Campus_id}</td>
              <td>{student.Name}</td>
              <td>{student.Email}</td>
              <td>{student.contact_number}</td>
              <td>{student.rfid}</td>
              <td>{student.checkInTime}</td>
              <td>{student.checkOutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
