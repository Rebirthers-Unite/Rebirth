import React, { useEffect, useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './ViewBlog.css';
import { useParams } from 'react-router-dom';

export const ViewBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`https://rebiirth.onrender.com/blogs/${id}`)
      .then((response) => response.json())
      .then((blogData) => setBlog(blogData));
  }, []);

  return (
    <div id="blog-page" className='mt-[-96px]'>
      <h1
        className="mb-6 text-5xl font-bold font-serif"
        style={{ textAlign: 'center', marginTop: '80px' }}
      >
        {blog.title}
      </h1>

      <img id="blog-image" src={blog.image_url} alt="blog-image" />

      <div className="row mt-5" id="blog-data">
        <img
          className="col-12 col-md-1"
          src={'https://www.w3schools.com/howto/img_avatar.png'}
          id="admin-photo"
          alt="admin-photo"
        />
        <p
          className="col-12 col-md-3 font-serif"
          style={{ textAlign: 'left', marginTop: '10px' }}
        >
          {blog.author}
          <br />
          {blog.date}. 4 min read
        </p>
        <div className="col-12 col-md-8 row">
          {/* Additional content for larger screens */}
        </div>
      </div>

      <p id="blog-content" className='font-serif'>{blog.body}</p>
    </div>
  );
};
