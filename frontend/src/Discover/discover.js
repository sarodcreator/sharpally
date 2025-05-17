import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './Discover';
import BlogDetails from './BlogDetails';
import { Provider } from 'react-redux';
import store from '../redux/store.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
