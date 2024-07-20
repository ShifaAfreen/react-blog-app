import React from 'react';
import BlogPostItem from './BlogPostItem';
import { Link } from 'react-router-dom';
import '../App.css'

const BlogPostList = ({ posts, setPage, page, totalResults, maxResults }) => {

  return (
    <div className='post-list'>
      {posts.map((post, index) => (
        <Link to={`/post/${index}`} key={index}>
          <BlogPostItem post={post} />
        </Link>
      ))}
      <div className='post-list-button'>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <button disabled={page === Math.ceil(maxResults / 10) || totalResults <= page * 10} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default BlogPostList;
