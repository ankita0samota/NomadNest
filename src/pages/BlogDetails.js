import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsData } from '../data/travelData';
import './Details.css';

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find(b => b.id === parseInt(id));

  if (!blog) {
    return <div className="details-page"><div className="details-content"><h2>Blog post not found.</h2></div></div>;
  }

  return (
    <div className="details-page">
      <div className="details-banner">
        <img src={blog.img} alt={blog.title} />
        <div className="details-overlay">
          <div className="details-badge">{blog.category}</div>
          <h1>{blog.title}</h1>
          <div className="details-meta">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>
        </div>
      </div>

      <div className="details-content">
        <div className="details-info-section">
          <p>{blog.content}</p>
        </div>

        <div className="btn-container">
          <button className="back-btn" onClick={() => navigate('/blogs')}>Back to Blogs</button>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
