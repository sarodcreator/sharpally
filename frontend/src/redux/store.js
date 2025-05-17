import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './BlogSlice';

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

export default store;
