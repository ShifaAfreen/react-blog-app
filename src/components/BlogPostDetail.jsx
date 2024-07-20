import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css'

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts[id];

  if (!post) return <div>Loading...</div>;

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} style={{ width: '100%' }} />}
      <p>{post.content}</p>
      <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default BlogPostDetails;
