import React from 'react';
import BlogSection from '../components/BlogSection';

function Blogs() {
  return (
    <div className="page-container" style={{ paddingTop: '60px' }}>
      <div className="page-header">
         <div className="hero-badge" style={{ backgroundColor: '#ffb347', padding: '8px 18px', borderRadius: '20px', display: 'inline-block', marginBottom: '10px', fontWeight: '600' }}>Inspiration</div>
         <h2>Latest Travel Stories</h2>
         <p>Read about our latest adventures and travel tips to inspire your next journey.</p>
      </div>
      <BlogSection />
    </div>
  );
}

export default Blogs;
