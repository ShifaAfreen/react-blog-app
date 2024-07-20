import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const maxResults = 100;
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=10`);
        setPosts(response.data.articles);
        setTotalResults(response.data.totalResults);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchPosts();
  }, [page]);

  return (
    <Router >
      <Routes>
        <Route path="/" element={<BlogPostList posts={posts} setPage={setPage} page={page} totalResults={totalResults} maxResults={maxResults} />} />
        <Route path="/post/:id" element={<BlogPostDetail posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
