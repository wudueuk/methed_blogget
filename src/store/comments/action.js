import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (commentsData) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  commentsData,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  dispatch(commentsRequest());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      (data) => {
        const post = data.data[0].data.children[0].data;
        const comments = data.data[1].data.children;
        const commentsData = {post, comments};
        dispatch(commentsRequestSuccess(commentsData));
      },
    )
    .catch(err => {
      dispatch(commentsRequestError(err.toString()));
    });
};
