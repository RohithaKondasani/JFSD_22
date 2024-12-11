import React from 'react';
import './Location.css';  // Assuming you'll style the page in Location.css

const Location = () => {
  return (
    <div className="location-container">

      <div className="main-content">
        <div className="left-image">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrW0X-z1T7fann-66ns_ZsRK5rxvvuONPcIVcPeOL5DkAJFykX"  // Replace this with the real image URL
            alt="Location"
            className="location-image" 
          />
        </div>

        <div className="right-details">
          <div className="detail-item">
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRewK5wAOUMQ4mIgiDUNoK01zFqVoRKR6OxeNZqFSEL7YHFhuod"  width="80px" height="80px">
          </img>
            <i className="fa fa-book"></i>
            <h3>EDUCATIONAL INSTITUTIONS</h3>
            <p>T.I.M.E School: 2 mins</p>
            <p>Indian School of Business: 15 mins</p>
          </div>

          <div className="detail-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRN70Fz8YabDCNOs88PdzqOJwRDKzPGcH1iAfro29v0HnrpmE"  width="80px" height="80px">
          </img>
            <i className="fa fa-hospital-o"></i>
            <h3>HEALTHCARE</h3>
            <p>Care Hospital: 15 mins</p>
            <p>Apollo Hospital: 20 mins</p>
          </div>

          <div className="detail-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcC04Unt7xMNET5mmlfuSptC6joT9iXvsfooh21W7e9LS2c3g"  width="80px" height="80px">
          </img>
            <i className="fa fa-shopping-cart"></i>
            <h3>RECREATION</h3>
            <p>City Center: 20 mins</p>
            <p>League Mall: 5 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
