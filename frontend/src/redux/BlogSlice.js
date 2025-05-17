import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const PAGE_SIZE = 20;

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (_, { getState }) => {
    const { filters, page } = getState().blogs;
    let url = `https://dev.to/api/articles?per_page=${PAGE_SIZE}&page=${page + 1}`;

    if (filters.topic) url += `&tag=${filters.topic}`;
    if (filters.author) url += `&username=${filters.author}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return data;
  }
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    items: [],
    page: 0,
    loading: false,
    error: null,
    hasMore: true,
    filters: { topic: '', author: '', genre: '', technology: '' },
    follows: [],
  },
  reducers: {
    toggleFollowAuthor(state, action) {
      const author = action.payload;
      if (state.follows.includes(author)) {
        state.follows = state.follows.filter(a => a !== author);
      } else {
        state.follows.push(author);
      }
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 0;
      state.items = [];
      state.hasMore = true;
      state.error = null;
    },
    resetBlogs(state) {
      state.items = [];
      state.page = 0;
      state.hasMore = true;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 0) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
        state.page += 1;
        if (action.payload.length < PAGE_SIZE) {
          state.hasMore = false;
        }
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { toggleFollowAuthor, setFilters, resetBlogs } = blogSlice.actions;

export const selectBlogs = (state) => state.blogs.items;
export const selectLoading = (state) => state.blogs.loading;
export const selectError = (state) => state.blogs.error;
export const selectHasMore = (state) => state.blogs.hasMore;
export const selectFilters = (state) => state.blogs.filters;
export const selectFollows = (state) => state.blogs.follows;

export default blogSlice.reducer;
