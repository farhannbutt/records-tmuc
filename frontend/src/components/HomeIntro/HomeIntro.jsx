// HomeIntro.jsx

import React from 'react';
import './HomeIntro.css';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import school1 from '../Assets/TMUC.png';
import school2 from '../Assets/TMUCpindi.jpg';
import school3 from '../Assets/fsd.jpg';

const HomeIntro = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className='HomeIntro'>
        <h3 className='choosecampus'>Select Your Campus</h3>
        <div className="content">
          <div className="imageContainer">
            <img src={school1} alt="School1" className='schoolImage1' />
            <img src={school2} alt="School2" className='schoolImage2' />
            <img src={school3} alt="School3" className='schoolImage3' />
          </div>

          <div className='campuses buttons'>
            <button className="Islamabadcampus">Islamabad Campus</button>
            <button className="Rawalpindicampus">Rawalpindi Campus</button>
            <button className="Karachicampus">Karachi Campus</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
