import React from 'react';
import '../App.css'

const BlogPostItem = ({ post }) => {
  return (
    <div className='post-item'>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
    </div>
  );
};

export default BlogPostItem;
