import React, { useState, useEffect } from 'react';
import './simulator.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';


const SimulatorPage = () => {
  const [floors, setFloors] = useState([]);
  const [students, setStudents] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showRooms, setShowRooms] = useState(false);
  const [showStudents, setShowStudents] = useState(false);

  const [checkinTime, setCheckinTime] = useState('');
  const [checkoutTime, setCheckoutTime] = useState('');
  const [checkedInProceeded, setCheckedInProceeded ] = useState(false)

  const navigate = useNavigate();
  const { isloggedin } = useAuth();
  if(!isloggedin){
    navigate('/login')
  }  

  // Function to handle the clock input change
  const handleCheckinTimeChange = (e) => {
    setCheckinTime(e.target.value); // Update the checkinTime state with the selected time
  };

  const handleCheckoutTimeChange = (e) => {
    setCheckoutTime(e.target.value); 
  };

  // Function to handle proceeding with the selected options
  const handleProceed = () => {
    if (selectedFloor && selectedRoom && selectedStudent && checkinTime) {
      // Proceed with the selected options
      // console.log('Proceeding with:', selectedFloor, selectedRoom, selectedStudent, checkinTime);
      // Send a request to the backend API
      fetch('http://localhost:5000/api/simulator/enter-in-room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roomId: selectedRoom.Room_id, //  selectedRoom has an id property
          time: checkinTime,
          checkoutTime,
          studentId: selectedStudent.Student_id //  selectedStudent has an id property
        }),
      })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`Network response was not ok: ${text}`);
          });
        }        
        return response.json();
      })
      .then(data => {
        // Handle response from the API
        console.log(data);
        if(!checkedInProceeded){
          setCheckedInProceeded(true)
          alert('Student Checked In successfully')
        } 
        else{
          alert('Student Checked Out successfully')
          navigate(0)
        }
      })
      .catch(error => {
        alert(error.message)
        console.error('Error:', error);
      });
    } else {
      alert('Please select options from all three tables before proceeding.');
    }
  };

  
  // Function to handle selection of floor
  const handleFloorSelection = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null); // Reset room selection
    setSelectedStudent(null); // Reset student selection
    fetchRoomData(floor.Floor_id);
    setShowRooms(true);
  };

  
//calling all students
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/students', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setStudents(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);
//calling all floors
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
  }, []);

  const fetchRoomData = async (Floor_id) => {
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
      console.log("data" + JSON.stringify(data))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
            <tr key={floor.Floor_id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedFloor === floor}
                  onChange={() => handleFloorSelection(floor)}
                />
              </td>
              <td>{floor.Floor_id}</td>
              <td>{floor.Department_id}</td>
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
              <tr key={room.Room_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRoom === room}
                    onChange={() => handleRoomSelection(room)}
                  />
                </td>
                <td>{room.Name}</td>
                <td>{room.Floor_id}</td>
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
              <th>Email</th>
            </tr>
            {students.map((student) => (
              <tr key={student.Student_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedStudent === student}
                    onChange={() => handleStudentSelection(student)}
                  />
                </td>
                <td>{student.Name}</td>
                <td>{student.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Clock for Check-in Time */}
     { !checkedInProceeded && <div className="checkin-clock">
        <label htmlFor="checkin-time">Check-in Time:</label>
        <input 
          type="time" 
          id="checkin-time" 
          value={checkinTime} 
          onChange={handleCheckinTimeChange} // Call handleCheckinTimeChange function when time changes
        />
      </div>}
      {checkedInProceeded &&  <div className="checkout-clock">
        <label htmlFor="checkout-time">Check-out Time:</label>
        <input 
          type="time" 
          id="checkout-time" 
          value={checkoutTime} 
          onChange={handleCheckoutTimeChange} // Call handleCheckinTimeChange function when time changes
        />
      </div>}
     

      {/* Proceed Button */}
      <button className="proceed-button" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};

export default SimulatorPage;
