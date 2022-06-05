import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostPicture from './PostPicture';
import Content from './Content';
import Rating from './Rating';
import PostDate from './PostDate';
import ButtonDelete from './ButtonDelete';

export const Post = ({postData}) => {
  const {
    id,
    title,
    author,
    ups,
    created,
    thumbnail,
    subreddit,
  } = postData.data;

  return (
    <li className={style.post}>
      <PostPicture imageDate={thumbnail} />
      <Content id={id} postTitle={title}
        author={author} subreddit={subreddit} />
      <Rating ratingUps={ups} />
      <PostDate dateTime={created} />
      <ButtonDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
