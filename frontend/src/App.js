import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FloorTable from './components/FloorTable/Floortable.jsx';
import RoomTable from './components/Roomtable/roomtable.jsx';
import Home from './pages/Home.jsx';
import StudentTable from './components/Students/students.jsx';
import Login from './components/Login/Login.jsx';
import CoursesTable from './components/Courses/CourseTable.jsx';
import RegistrationTable from './components/Registration/registration.jsx';
import Simulator from './components/Simulator/simulator.jsx';
import { AuthProvider } from './store/auth.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentTable/>} /> 
          <Route path="/floors" element={<FloorTable/>} />
          <Route path="/rooms/:Floor_id" element={<RoomTable/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Course/:Room_id" element={<CoursesTable/>}/>
          <Route path="/registration" element={<RegistrationTable />} />
          <Route path="/simulator" element={<Simulator />} />
          {/* <Route path="/Logout" element={<Logout />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
