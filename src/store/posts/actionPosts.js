import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    const token = getState().tokenReducer.token;
    let page = getState().posts.page;
    let countPages = getState().posts.countPages;
    let prevPosts = [];
    if (newPage && newPage !== '*') {
      page = newPage;
      countPages = 0;
    } else {
      prevPosts = getState().posts.posts;
    }

    const after = getState().posts.after;
    const status = getState().posts.status;
    const isLast = getState().posts.isLast;

    if (!token || status === '' || isLast || page === '*') return;

    if (status === 'loading' && page) {
      return axios(
        `${URL_API}/${page}?limit=10${after ? `&after=${after}` : ``}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then(({data}) => {
          countPages++;
          const posts = [...prevPosts, ...data.data.children];
          const after = data.data.after;
          return {posts, after, countPages, page};
        })
        .catch((err) => ({error: err.toString()}));
    }
  }
);
