import {takeLatest, put, select} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {
  postsRequestError,
  postsRequestSuccess,
  POSTS_REQUEST
} from './actionPosts';

function* fetchSearch(search) {
  const token = yield select(state => state.tokenReducer.token);

  try {
    const request = yield axios(`${URL_API}/search?q=${search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    yield put(searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
