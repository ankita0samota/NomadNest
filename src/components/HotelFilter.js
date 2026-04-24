import React from 'react';

function HotelFilter({ activeFilter, setActiveFilter }) {
  const filters = ['All', 'Luxury', 'Cozy', 'Traditional'];

  const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };

  const filterButtonStyle = (isActive) => ({
    padding: '10px 25px',
    borderRadius: '25px',
    border: isActive ? 'none' : '1px solid #ddd',
    backgroundColor: isActive ? '#ff8c00' : 'white',
    color: isActive ? 'white' : '#666',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    fontSize: '15px'
  });

  return (
    <div style={filterContainerStyle}>
      {filters.map(filter => (
        <button
          key={filter}
          style={filterButtonStyle(activeFilter === filter)}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default HotelFilter;
