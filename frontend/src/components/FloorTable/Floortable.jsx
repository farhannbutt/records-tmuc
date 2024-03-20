// FloorTable.jsx

import React from 'react';
import './Floortable.css';
import { Link } from 'react-router-dom';

const FloorTable = () => {
  // Sample data (replace with actual data fetched from the backend)
  const floors = [
    { id: 1, departmentId: 101, floorNumber: 1, campusId: 1 },
    { id: 2, departmentId: 102, floorNumber: 1, campusId: 2 },
    { id: 3, departmentId: 103, floorNumber: 1, campusId: 1 },
    { id: 4, departmentId: 104, floorNumber: 1, campusId: 2 },
  ]

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
            <tr key={floor.id}>
              <td><Link to= "/rooms">{floor.id}</Link></td>
              <td>{floor.departmentId}</td>
              <td>{floor.floorNumber}</td>
              <td>{floor.campusId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FloorTable;
