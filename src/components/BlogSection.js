import React from "react";
import { Link } from "react-router-dom";
import "./BlogSection.css";
import { blogsData } from "../data/travelData";

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div className="badge">Featured Blogs</div>
        <Link to="/blogs" className="blog-btn">View All Blogs</Link>
      </div>

      <div className="blog-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px 0'
      }}>
        {blogsData.map((blog) => (
          <div key={blog.id} className="blog-card" style={{
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            border: '1px solid #eee'
          }}>
            <img src={blog.img} alt={blog.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="blog-card-content" style={{ padding: '20px' }}>
              <span style={{ color: '#ff8c00', fontSize: '13px', fontWeight: '600' }}>{blog.category}</span>
              <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{blog.title}</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>{blog.description}</p>
              <Link to={`/blogs/${blog.id}`} style={{
                color: '#ff8c00',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px'
              }}>Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
