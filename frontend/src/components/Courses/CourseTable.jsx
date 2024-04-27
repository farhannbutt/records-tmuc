import {React, useState, useEffect} from 'react';
import './CourseTable.css'; 
import { Link, useParams } from 'react-router-dom';

const CoursesTable = () => {
    const { Room_id } = useParams();
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/course/by-room-id/${Room_id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const data = await response.json();
          console.log(JSON.stringify(data))
          setCourses(data); // Update state with fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the fetchData function when the component mounts
    }, []); // Empty dependency array en

  return (
    <div className="courses-table-container">
      <table className="courses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Credits</th>
            <th>Program</th>
            <th>Room ID</th>
            <th>Start Time</th> 
            <th>End time</th> 
            
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => ( // Mapping over courses
            <tr key={course.Course_id}>
              <td><Link to="/students">{course.Course_id}</Link></td>
              <td>{course.Name}</td>
              <td>{course.Credits}</td>
              <td>{course.Program}</td>
              <td>{course.Room_id}</td>
              <td>{course.Start_time}</td> 
              <td>{course.End_time}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
