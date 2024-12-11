import React from 'react';
import './Home.css'; // Make sure this is in the same directory

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="left-image">
          <img src="https://media.istockphoto.com/id/172926428/photo/eclectic-studio-apartment-living-room-with-furniture.jpg?s=612x612&w=0&k=20&c=BtMTEBdIWGZ430L1_GXpeWAj4YtlDx7y9Ydbhsfu4_8=" alt="Interior" />
        </div>
        <div className="right-details">
          <h2>LIVING IS IN THE DETAILS</h2>
          <div className="detail-items">
            <div className="detail-item">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfGwQ-RoZolk6NhOCB0b4h8ADH-Wb-67xwCMvjb0ot04vmgHmg" alt="Villas" width="80px" height="80px" />
              <p>226 East and West Premium Villas</p>
            </div>
            <div className="detail-item">
              <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4SwOOTftSFCSkp1x-RwNr9iDcCcHPL9EhALiArT0SnD3vZch5" alt="Sports" width="80px" height="80px" />
              <p>Sports and Play Facilities</p>
            </div>
            <div className="detail-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ginYFQkxGtIKRPTLaTm0Zt_odCuIp8zk1kJRGtebcKpWrHpr" alt="Walking Track" width="80px" height="80px" />
              <p>Walking track overlooking the river</p>
            </div>
            <div className="detail-item">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyLsLah1IZsrv5bCxawZYJq2fu-PMST3oWvxcDPnu_-AosE5WN" alt="Location" width="80px" height="80px" />
              <p>Located in the developed area</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;