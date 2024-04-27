// Navbar.jsx
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import { useAuth } from '../../store/auth';

import React, { useState } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";

const Navbar = () => {
  const { isloggedin } = useAuth();
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
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            {activeItem === 0 && <hr />}
          </li>
          <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
            <NavLink to="/floors" activeClassName="active">Floor</NavLink>
            {activeItem === 1 && <hr />}
          </li>
          {/* <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <NavLink to="/rooms" activeClassName="active">Room</NavLink>
            {activeItem === 2 && <hr />}
          </li> */}
          <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
            <NavLink to="/students" activeClassName="active">Students</NavLink>
            {activeItem === 3 && <hr />}
          </li>
          <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
            <NavLink to="/simulator" activeClassName="active">Simulator</NavLink>
            {activeItem === 4 && <hr />}
          </li>
          <li className={activeItem === 5 ? 'active' : ''} onClick={() => handleItemClick(4)}>
            <NavLink to="/Attendance-report" activeClassName="active">Attendance-Report</NavLink>
            {activeItem === 5 && <hr />}
          </li>
          <li>
          {isloggedin === false ? (
            <Link to="/login">
              <button>Login</button>
            </Link>
          ) : (
            <NavLink to="/logout" activeClassName="active">Logout</NavLink>
          )}
        </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
