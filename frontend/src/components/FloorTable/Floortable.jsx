// FloorTable.jsx

import React, { useState, useEffect } from 'react';
import './Floortable.css';
import { Link } from 'react-router-dom';

const FloorTable = () => {
  const [floors, setFloors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/floor', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setFloors(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array en
  return (
    <div className="floor-table-container">
      <table className="floor-table">
        <thead>
          <tr>
            <th>Floor ID</th>
            <th>Department ID</th>
            <th>Floor Number</th>
            <th>Campus ID</th>
          </tr>
        </thead>
        <tbody>
          {floors.map((floor) => (
            <tr key={floor.Floor_id}>
              <td><Link to={`/rooms/${floor.Floor_id}`}>{floor.Floor_id}</Link></td>
              <td>{floor.Department_id}</td>
              <td>{floor.Floor_number}</td>
              <td>{floor.Campus_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FloorTable;
