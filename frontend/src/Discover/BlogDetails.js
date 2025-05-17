// src/components/BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch full blog post by ID from Dev.to API
  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        if (!res.ok) throw new Error('Failed to fetch post');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <div className="blog-details-container">
      <Link to="/">← Back to Discover</Link>
      <h1>{post.title}</h1>
      <div className="author-info">
        <img src={post.user.profile_image_90} alt={post.user.name} className="avatar" />
        <span>{post.user.name}</span>
      </div>
      {post.cover_image && <img src={post.cover_image} alt="Cover" className="cover-image" />}
      <ReactMarkdown>{post.body_markdown}</ReactMarkdown>
    </div>
  );
}

export default BlogDetails;
