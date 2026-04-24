import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { attractionsData } from '../data/travelData';
import './Details.css';

function ExploreDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const attraction = attractionsData.find(a => a.id === parseInt(id));

  if (!attraction) {
    return <div className="details-page"><div className="details-content"><h2>Attraction not found.</h2></div></div>;
  }

  return (
    <div className="details-page">
      <div className="details-banner">
        <img src={attraction.img} alt={attraction.title} />
        <div className="details-overlay">
          <div className="details-badge">Explore</div>
          <h1>{attraction.title}</h1>
          <div className="details-meta">
            <span>📍 {attraction.location}</span>
            <span>📅 Best Time: {attraction.bestTime}</span>
          </div>
        </div>
      </div>

      <div className="details-content">
        <div className="details-info-section">
          <h3>Overview</h3>
          <p>{attraction.description}</p>
        </div>

        <div className="details-info-section">
          <h3>History & Significance</h3>
          <p>{attraction.history}</p>
        </div>

        <div className="details-info-section">
          <h3>Key Highlights</h3>
          <ul className="info-list">
            {attraction.highlights.map((highlight, index) => (
              <li key={index}>⭐ {highlight}</li>
            ))}
          </ul>
        </div>

        <div className="btn-container">
          <button className="back-btn" onClick={() => navigate('/attractions')}>Back to Attractions</button>
          <button className="action-btn" onClick={() => alert('Guided tours coming soon!')}>Book a Tour</button>
        </div>
      </div>
    </div>
  );
}

export default ExploreDetails;
