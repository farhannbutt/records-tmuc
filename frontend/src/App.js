import './App.css';
import FloorTable from './components/FloorTable/Floortable.jsx';
import Navbar from "./components/Navbar/Navbar.jsx"
import RoomTable from './components/Roomtable/roomtable.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <FloorTable/>
      <RoomTable/>
     
    </div>
  );
}

export default App;
