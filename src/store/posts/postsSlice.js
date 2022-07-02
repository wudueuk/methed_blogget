import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './actionPosts';

const initialState = {
  status: '',
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '*',
  countPages: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [postsRequestAsync.pending]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [postsRequestAsync.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.after = action.payload.after;
      state.countPages = action.payload.countPages;
      state.page = action.payload.page;
      state.error = '';
      state.status = 'loaded';
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
  },
});

export default postsSlice.reducer;
