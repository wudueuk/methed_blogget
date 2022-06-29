import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
  loading: true,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts: data.children,
  after: data.after,
});

export const postsRequestSuccessAfter = (data, countPages) => ({
  type: POSTS_REQUEST_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
  countPages,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().posts.page;
  if (newPage && newPage !== '*') {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().tokenReducer.token;
  const after = getState().posts.after;
  let countPages = getState().posts.countPages;
  const loading = getState().posts.loading;
  const isLast = getState().posts.isLast;

  if (!token || loading || isLast || page === '*') return;

  dispatch(postsRequest());

  axios(`${URL_API}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      if (after) {
        countPages++;
        dispatch(postsRequestSuccessAfter(data.data, countPages));
      } else {
        dispatch(postsRequestSuccess(data.data));
      }
    })
    .catch(err => {
      dispatch(postsRequestError(err.toString()));
    });
};
