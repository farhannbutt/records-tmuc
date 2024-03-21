import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FloorTable from './components/FloorTable/Floortable.jsx';
import RoomTable from './components/Roomtable/roomtable.jsx';
import Home from './pages/Home.jsx';
import StudentTable from './components/Students/students.jsx';
import Login from './components/Login/Login.jsx';
import CoursesTable from './components/Courses/CourseTable.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/students" element={<StudentTable/>} /> 
        <Route path="/floors" element={<FloorTable/>} />
        <Route path="/rooms" element={<RoomTable/>} />
        <Route path="/Login" element = {<Login />} />
        <Route path = "/Course" element = {< CoursesTable/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
