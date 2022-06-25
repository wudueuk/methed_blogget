import style from './List.module.css';
import Post from './Post';
import {usePosts} from '../../../hooks/usePosts';
import PostsLoader from './PostsLoader';

export const List = () => {
  const [posts, loading] = usePosts();

  if (posts) {
    return (
      <ul className={style.list}>
        {loading ? (<PostsLoader />) : posts.map((postData, id) => (
          <Post key={id} postData={postData} />
        ))}
      </ul>
    );
  } else {
    return <ul className={style.list}></ul>;
  }
};
