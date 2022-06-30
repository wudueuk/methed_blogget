import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/actionComments';

export const useCommentsData = (id) => {
  const post = useSelector(state => state.comments.post);
  const comments = useSelector(state => state.comments.comments);
  const token = useSelector(state => state.tokenReducer.token);
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(commentsRequestAsync(id));
  }, [token]);

  return {post, comments, status};
};
