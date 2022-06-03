import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const {posts} = useContext(postsContext);

  if (posts) {
    return (
      <ul className={style.list}>
        {posts.map((postData, id) => (
          <Post key={id} postData={postData} />
        ))}
      </ul>
    );
  } else {
    return <ul className={style.list}></ul>;
  }
};
