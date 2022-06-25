import style from './List.module.css';
import Post from './Post';
import {usePosts} from '../../../hooks/usePosts';
import Preloader from '../../../UI/Preloader';

export const List = () => {
  const [posts, loading] = usePosts();

  if (posts) {
    return (
      <ul className={style.list}>
        {loading ? (<Preloader />) : posts.map((postData, id) => (
          <Post key={id} postData={postData} />
        ))}
      </ul>
    );
  } else {
    return <ul className={style.list}></ul>;
  }
};
