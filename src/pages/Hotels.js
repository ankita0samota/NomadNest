import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelFilter from '../components/HotelFilter';
import { hotelsData } from '../data/travelData';
import './Attractions.css';

function Hotels() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredHotels = activeFilter === 'All' 
    ? hotelsData 
    : hotelsData.filter(hotel => hotel.type === activeFilter);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="hero-badge">Curated Stays</div>
        <h2>Find Your Perfect Stay</h2>
        <p>Explore our handpicked selection of luxury resorts, cozy lodges, and traditional stays across the world.</p>
      </div>

      <HotelFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="card-grid">
        {filteredHotels.map((item) => (
          <div key={item.id} className="card">
            <div style={{ position: 'relative' }}>
              <img src={item.img} alt={item.title} className="card-image" />
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                right: '15px', 
                background: 'rgba(255,140,0,0.9)', 
                color: 'white', 
                padding: '5px 12px', 
                borderRadius: '15px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>${item.price}/night</div>
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <span style={{ color: '#ffb347', fontWeight: 'bold' }}>★ {item.rating}</span>
              </div>
              <p className="location-text">📍 {item.location}</p>
              <p className="desc-text">{item.description}</p>
              <button 
                className="card-btn" 
                onClick={() => navigate(`/hotels/${item.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredHotels.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
          No hotels found in this category.
        </div>
      )}
    </div>
  );
}

export default Hotels;
