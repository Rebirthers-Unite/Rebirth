import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ id, title, content, image }) => {
  return (
    <div className="card me-5 mb-5 px-0 pt-0 shadow p-3 font-serif" id="blog-card">
      <img className="card-img-top" alt="" src={image} style={{ height: '250px', objectFit: 'cover' }} />
      <div className="card-body">
        <h3 className="card-title text-3xl font-bold">{title}</h3>
        <p className="card-text mb-3">{content.slice(0, 90) + '...'}</p>
        <Link to={`/blog/${id}`} style={{ color: 'purple' }}>
          Read More <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </div>
    </div>
  );
};
