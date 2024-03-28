import React, { useState } from 'react';
import './simulator.css';

const SimulatorPage = () => {
  // Sample data for floors
  const [floors, setFloors] = useState([
    { id: 1, name: 'Floor 1', departmentId: 'Dept 1' },
    { id: 2, name: 'Floor 2', departmentId: 'Dept 2' },
    { id: 3, name: 'Floor 3', departmentId: 'Dept 3' },
    { id: 4, name: 'Floor 4', departmentId: 'Dept 4' },
    { id: 5, name: 'Floor 5', departmentId: 'Dept 5' },
  ]);

  // Sample data for rooms
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', floorId: 1 },
    { id: 2, name: 'Room 201', floorId: 2 },
    { id: 3, name: 'Room 301', floorId: 3 },
    { id: 4, name: 'Room 401', floorId: 4 },
    { id: 5, name: 'Room 501', floorId: 5 },
  ]);

  // Sample data for students
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', roomId: 1 },
    { id: 2, name: 'Jane Smith', roomId: 2 },
    { id: 3, name: 'Michael Johnson', roomId: 3 },
    { id: 4, name: 'Emily Davis', roomId: 4 },
    { id: 5, name: 'Chris Wilson', roomId: 5 },
  ]);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showRooms, setShowRooms] = useState(false);
  const [showStudents, setShowStudents] = useState(false);

  // Function to handle selection of floor
  const handleFloorSelection = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null); // Reset room selection
    setSelectedStudent(null); // Reset student selection
    setShowRooms(true);
  };

  // Function to handle selection of room
  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    setSelectedStudent(null); // Reset student selection
    setShowStudents(true);
  };

  // Function to handle selection of student
  const handleStudentSelection = (student) => {
    setSelectedStudent(student);
  };

  // Function to handle Proceed button click
  const handleProceed = () => {
    if (selectedFloor && selectedRoom && selectedStudent) {
      // Proceed with the selected options
      console.log('Proceeding with:', selectedFloor, selectedRoom, selectedStudent);
    } else {
      alert('Please select options from all three tables before proceeding.');
    }
  };

  return (
    <div className="simulator">
      {/* Floor Table */}
      <table className="floor-table">
        <caption>Floors</caption>
        <tbody>
          <tr>
            <th>Select</th>
            <th>Floor</th>
            <th>Department ID</th>
          </tr>
          {floors.map((floor) => (
            <tr key={floor.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedFloor === floor}
                  onChange={() => handleFloorSelection(floor)}
                />
              </td>
              <td>{floor.name}</td>
              <td>{floor.departmentId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Room Table */}
      {showRooms && (
        <table className="room-table">
          <caption>Rooms</caption>
          <tbody>
            <tr>
              <th>Select</th>
              <th>Room</th>
              <th>Floor ID</th>
            </tr>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRoom === room}
                    onChange={() => handleRoomSelection(room)}
                  />
                </td>
                <td>{room.name}</td>
                <td>{room.floorId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Student Table */}
      {showStudents && (
        <table className="student-table">
          <caption>Students</caption>
          <tbody>
            <tr>
              <th>Select</th>
              <th>Student</th>
              <th>Room ID</th>
            </tr>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedStudent === student}
                    onChange={() => handleStudentSelection(student)}
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.roomId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Clock for Check-in Time */}
      <div className="checkin-clock">
        <label htmlFor="checkin-time">Check-in Time:</label>
        <input type="time" id="checkin-time" />
      </div>

      {/* Proceed Button */}
      <button className="proceed-button" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};

export default SimulatorPage;
