import React from 'react';
import './CourseTable.css'; // Add CSS file for styling
import { Link } from 'react-router-dom';

const CoursesTable = () => {

  const courses = [
    { id: 1, name: "Course 1", credits: 3, program: "Program A" },
    { id: 2, name: "Course 2", credits: 4, program: "Program B" },
    { id: 3, name: "Course 3", credits: 3, program: "Program A" },
    { id: 4, name: "Course 4", credits: 2, program: "Program C" },
  ];

  const slots = [
    { id: 1, name: "08:00 - 10:00" },
    { id: 2, name: "10:00 - 12:00" },
    { id: 3, name: "12:00 - 02:00" },
    { id: 4, name: "02:00 - 04:00" },
  ];

  return (
    <div className="courses-table-container">
      <table className="courses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Credits</th>
            <th>Program</th>
            <th>Slot</th> {/* New column for slots */}
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => ( // Mapping over courses
            <tr key={course.id}>
              <td><Link to="/students">{course.id}</Link></td>
              <td>{course.name}</td>
              <td>{course.credits}</td>
              <td>{course.program}</td>
              <td>{slots[index].name}</td> {/* Displaying corresponding slot */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
