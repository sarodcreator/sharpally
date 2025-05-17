import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs, setFilters, toggleFollowAuthor, selectBlogs, selectLoading, selectError, selectHasMore, selectFilters, selectFollows } from '../redux/BlogSlice';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/navbar';
import Footer from '../components/shared/Footer';

function Discover() {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const hasMore = useSelector(selectHasMore);
  const filters = useSelector(selectFilters);
  const follows = useSelector(selectFollows);

  // Fetch blogs on mount and when filters change
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch, filters]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;
    if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Filter change handlers (example for topic)
  const onTopicChange = (e) => {
    dispatch(setFilters({ topic: e.target.value }));
  };

  const onToggleFollow = (author) => {
    dispatch(toggleFollowAuthor(author));
  };

  return (
	<>
	  <Navbar/ >
    <div className="discover-container">
      <h1>Discover Blogs</h1>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by Topic"
          value={filters.topic}
          onChange={onTopicChange}
        />
        {/* Add inputs/selects for author, genre, technology as needed */}
      </div>

      {/* Blogs List */}
      <div className="blogs-list">
        {blogs.map((post) => (
          <div key={post.id} className="blog-card">
            <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={post.cover_image || post.social_image || ''} alt="Cover" className="cover-image" />
              <h2>{post.title}</h2>
            </Link>
            <div className="author-section">
              <img src={post.user.profile_image_90} alt={post.user.name} className="avatar" />
              <span>{post.user.name}</span>
              <button onClick={() => onToggleFollow(post.user.username)}>
                {follows.includes(post.user.username) ? 'Unfollow' : 'Follow'}
              </button>
            </div>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!hasMore && <p>No more posts.</p>}
    </div>
	  <Footer />
	  </>
  );
}

export default Discover;
