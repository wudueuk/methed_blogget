import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostPicture from './PostPicture';
import PostTitle from './PostTitle';
import Rating from './Rating';
import PostDate from './PostDate';
import PostAuthor from './PostAuthor';
import ButtonDelete from './ButtonDelete';

export const Post = ({postData}) => {
  const {
    title,
    permalink,
    author,
    ups,
    created,
    thumbnail,
  } = postData.data;
  const titleData = {title, permalink};

  return (
    <li className={style.post}>
      <PostPicture imageDate={thumbnail} />
      <div className={style.content}>
        <PostTitle postTitleData={titleData} />
        <PostAuthor authorData={author} />
      </div>

      <Rating ratingUps={ups} />

      <PostDate dateTime={created} />
      <ButtonDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
