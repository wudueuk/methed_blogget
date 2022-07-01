import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postsRequestAsync} from '../store/posts/actionPosts';

export const usePosts = () => {
  const posts = useSelector(state => state.posts.posts);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(postsRequestAsync());
  }, [token]);

  return [posts];
};
