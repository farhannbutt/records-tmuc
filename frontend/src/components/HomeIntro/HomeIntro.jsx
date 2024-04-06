// HomeIntro.jsx

import React from 'react';
import './HomeIntro.css';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import school1 from '../Assets/TMUC.png';
const HomeIntro = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className='HomeIntro'>
        <h3 className='choosecampus'>The Millennium University College</h3>
        <div className="content">
          <div className="imageContainer">
            <img src={school1} alt="School1" className='schoolImage1' />
          </div>

          <div className='campuse button'>
            <button className="Islamabadcampus">Islamabad Campus</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
