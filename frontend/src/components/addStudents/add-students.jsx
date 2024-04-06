// AddStudent.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './add-students.css';

const AddStudent = () => {
  const [student, setStudent] = useState({
    Student_id: '',
    Department_id: '',
    Campus_id: '',
    Name: '',
    Email: '',
    contact_number: '',
    rfid: ''
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        // Student added successfully
        alert('Student added successfully');
        setStudent({
          Student_id: '',
          Department_id: '',
          Campus_id: '',
          Name: '',
          Email: '',
          contact_number: '',
          rfid: ''
        });
        navigate('/');
      } else {
        // Error occurred while adding student
        alert('Failed to add student');
      }
    } catch (error) {
      console.error('Add student error:', error);
    }
  };

  return (
    <section>
      <main>
        <div className='background'>
        <div className="add-student-container">
          <h2>Add Student</h2>
          <form onSubmit={handleSubmit} className="add-student-form">
            <label htmlFor="Student_id">Student ID</label>
            <input
              type="text"
              name="Student_id"
              value={student.Student_id}
              onChange={handleInput}
              required
            />
            <label htmlFor="Department_id">Department ID</label>
            <input
              type="text"
              name="Department_id"
              value={student.Department_id}
              onChange={handleInput}
              required
            />
            <label htmlFor="Campus_id">Campus ID</label>
            <input
              type="text"
              name="Campus_id"
              value={student.Campus_id}
              onChange={handleInput}
              required
            />
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              value={student.Name}
              onChange={handleInput}
              required
            />
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              value={student.Email}
              onChange={handleInput}
              required
            />
            <label htmlFor="contact_number">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              value={student.contact_number}
              onChange={handleInput}
              required
            />
            <label htmlFor="rfid">RFID</label>
            <input
              type="text"
              name="rfid"
              value={student.rfid}
              onChange={handleInput}
              required
            />
            <button type="submit">Add Student</button>
          </form>
        </div>
        </div>
      </main>
    </section>
  );
};

export default AddStudent;
