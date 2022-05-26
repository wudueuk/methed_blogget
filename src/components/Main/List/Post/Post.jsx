import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostPicture from './PostPicture';
import PostTitle from './PostTitle';
import Rating from './Rating';
import PostDate from './PostDate';
import PostAuthor from './PostAuthor';
import ButtonDelete from './ButtonDelete';

export const Post = ({postData}) => {
  const {title, author, ups, date, picture} = postData;
  return (
    <li className={style.post}>
      <PostPicture imageDate={picture} />
      <div className={style.content}>
        <PostTitle postTitleData={title} />
        <PostAuthor authorData={author} />
      </div>

      <Rating ratingUps={ups} />

      <PostDate dateTime={date} />
      <ButtonDelete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
