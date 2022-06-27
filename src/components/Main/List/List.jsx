import style from './List.module.css';
import Post from './Post';
import {useEffect, useRef} from 'react';
import {useParams, Outlet} from 'react-router-dom';
import {postsRequestAsync} from '../../../store/posts/action';
import {useSelector, useDispatch} from 'react-redux';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {posts.map(({data}) => (
          <Post key={data.id} postData={data} />
        ))}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
