import {React, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import './roomtable.css';

const RoomTable = () => {
  const {Floor_id} = useParams()
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/rooms/by-floor-id/${Floor_id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setRooms(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array en

  return (
    <div className="room-table-container">
      <table className="room-table">
        <thead>
          <tr>
            <th>Room ID</th>
            <th>Name</th>
            <th>Floor ID</th>
            {/* <th>Actions</th>  */}
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.Room_id}>
              <Link to={`/Course/${room.Room_id}`}>{room.Room_id}</Link>
              <td>{room.Name}</td>
              <td>{room.Floor_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;