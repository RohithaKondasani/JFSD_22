import React from 'react';
import './Amenties.css';

const Amenties = () => {
  return (
    <div className="amenties-container">
      
        

      <div className="content">
        <div className="left-image">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDo_NBbZRsYPSr6mBMDy6f7M99ZWFLg1vqppLvztAwEBNF9djG"
            alt="Indoor Court"
          />
        </div>
        <div className="right-details">
          <h3>
            For every lifestyle aspiration you dream of, there is something for you!
          </h3>
          <ul className="amenties-list">
            <li>Gym</li>
            <li>Indoor Games</li>
            <li>Swimming Pool</li>
            <li>Convenience Store</li>
            <li>Party Lawns</li>
            <li>Cricket Practice Net</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenties;
