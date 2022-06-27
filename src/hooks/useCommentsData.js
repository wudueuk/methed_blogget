import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/action';

export const useCommentsData = (id) => {
  const commentsData = useSelector(state => state.comments.commentsData);
  const token = useSelector(state => state.tokenReducer.token);
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(commentsRequestAsync(id));
  }, [token]);

  return {commentsData, status};
};
