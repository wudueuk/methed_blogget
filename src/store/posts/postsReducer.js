import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS
} from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: '',
        after: action.after,
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: '',
      };

    default:
      return state;
  }
};
