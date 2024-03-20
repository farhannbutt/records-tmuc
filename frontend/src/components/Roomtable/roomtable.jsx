import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './roomtable.css';

const RoomTable = () => {
  // Sample data (replace with actual data fetched from the backend)
  const rooms = [
    { room_id: 1, name: "Room 101", floor_id: 1 },
    { room_id: 2, name: "Room 102", floor_id: 1 },
    { room_id: 3, name: "Room 201", floor_id: 1 },
    { room_id: 4, name: "Room 202", floor_id: 1 },
    // Add more rooms as needed
  ];

  return (
    <div className="room-table-container">
      <table className="room-table">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Name</th>
            <th>Floor ID</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.room_id}>
              <td>
                <Link to="/students">
                  <button>{room.room_id}</button> {/* Enclose button inside Link */}
                </Link>
              </td>
              <td>{room.name}</td>
              <td>{room.floor_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
