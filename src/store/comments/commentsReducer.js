import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS
} from './action';

const initialState = {
  status: '',
  commentsData: [],
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        commentsData: action.commentsData,
        error: '',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: '',
      };

    default:
      return state;
  }
};
