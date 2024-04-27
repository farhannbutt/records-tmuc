import { useEffect, useState } from "react";
import './Attendance.css'; 


const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/attendance-report', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setAttendance(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    <div className="attendance-table-container">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Student Name</th>
            <th>Check-In Time</th>
            <th>Check-Out Time</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a, index) => (
            <tr key={index}>
              <td>{a.Course_name}</td>
              <td>{a.Student_name}</td>
              <td>{a.CheckInTime ? a.CheckInTime : "-"}</td>
              <td>{a.CheckOutTime ? a.CheckOutTime : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
