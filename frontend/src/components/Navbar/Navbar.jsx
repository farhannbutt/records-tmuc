// Navbar.jsx
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/tmuc-high-resolution-logo (1).png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      {/* list of buttons in the Navbar*/}
      <div className='Login'>
        <ul className="nav-menu">
          <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
            <a href="/">Home</a>
            {activeItem === 0 && <hr />}
          </li>
       
          <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
            <a href="floors">Floor</a>
            {activeItem === 1 && <hr />}
          </li>
          <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <a href="Rooms">Room</a>
            {activeItem === 2 && <hr />}
          </li>
          <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <a href="Students">Students</a>
            {activeItem === 3 && <hr />}
          </li>
          <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <a href="Course">Courses</a>
            {activeItem === 4 && <hr />}
          </li>


          
        </ul>
        <Link to="/Login"> 
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
