import React from 'react';
import { useNavigate } from 'react-router-dom';
import { attractionsData } from '../data/travelData';
import './Attractions.css';

function Attractions() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="hero-badge">Must See Places</div>
        <h2>Discover Popular Attractions</h2>
        <p>Explore some of the most famous and breathtaking landmarks around the globe with in-depth local knowledge.</p>
      </div>

      <div className="card-grid">
        {attractionsData.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="location-text">📍 {item.location}</p>
              <p className="desc-text">{item.description}</p>
              <button 
                className="card-btn" 
                onClick={() => navigate(`/attractions/${item.id}`)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attractions;
