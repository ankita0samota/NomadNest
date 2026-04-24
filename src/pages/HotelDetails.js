import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotelsData } from '../data/travelData';
import './Details.css';

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotelsData.find(h => h.id === parseInt(id));

  if (!hotel) {
    return <div className="details-page"><div className="details-content"><h2>Hotel not found.</h2></div></div>;
  }

  return (
    <div className="details-page">
      <div className="details-banner">
        <img src={hotel.img} alt={hotel.title} />
        <div className="details-overlay">
          <div className="details-badge">{hotel.type}</div>
          <h1>{hotel.title}</h1>
          <div className="details-meta">
            <span>📍 {hotel.location}</span>
            <span>⭐ {hotel.rating} / 5.0</span>
            <span>💰 ${hotel.price} / night</span>
          </div>
        </div>
      </div>

      <div className="details-content">
        <div className="details-info-section">
          <h3>About this Hotel</h3>
          <p>{hotel.description}</p>
        </div>

        <div className="details-info-section">
          <h3>Amenities</h3>
          <ul className="info-list">
            {hotel.amenities.map((amenity, index) => (
              <li key={index}>✔ {amenity}</li>
            ))}
          </ul>
        </div>

        <div className="btn-container">
          <button className="back-btn" onClick={() => navigate('/hotels')}>Back to Hotels</button>
          <button className="action-btn" onClick={() => alert('Booking system coming soon!')}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
