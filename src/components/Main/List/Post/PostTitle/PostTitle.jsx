import style from './PostTitle.module.css';
import PropTypes from 'prop-types';

export const PostTitle = ({postTitleData}) => (
  <h2 className={style.title}>
    <a className={style.linkPost} href={postTitleData.link}>
      {postTitleData.title}
    </a>
  </h2>
);

PostTitle.propTypes = {
  postTitleData: PropTypes.object,
};
