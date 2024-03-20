// StudentTable.jsx

import React from 'react';
import './students.css';

const StudentTable = () => {

    const sampleStudents = [
        {
          studentId: 1,
          departmentId: '101',
          campusId: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          checkInTime: '09:00 AM',
          checkOutTime: '05:00 PM'
        },
        {
          studentId: 2,
          departmentId: 102,
          campusId: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          checkInTime: '08:30 AM',
          checkOutTime: '04:30 PM'
        },
        {
          studentId: 3,
          departmentId: 103,
          campusId: 1,
          name: 'Alice Johnson',
          email: 'alice.johnson@example.com',
          checkInTime: '09:15 AM',
          checkOutTime: '05:15 PM'
        },
        {
          studentId: 4,
          departmentId: 104,
          campusId: 2,
          name: 'Bob Brown',
          email: 'bob.brown@example.com',
          checkInTime: '08:45 AM',
          checkOutTime: '04:45 PM'
        },         {
            studentId: 4,
            departmentId: 104,
            campusId: 2,
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            checkInTime: '08:45 AM',
            checkOutTime: '04:45 PM'
          }];
  return (
    <div className="student-table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Department ID</th>
            <th>Campus ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
          </tr>
        </thead>
        <tbody>
          {sampleStudents.map(student => (
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.departmentId}</td>
              <td>{student.campusId}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.checkInTime}</td>
              <td>{student.checkOutTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
