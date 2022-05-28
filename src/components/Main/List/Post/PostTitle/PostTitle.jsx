import style from './PostTitle.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostTitle = ({postTitleData}) => (
  <Text As='h2' className={style.title}>
    <Text As='a' size={18} tsize={26} dsize={32} bold
      className={style.linkPost}
      href={postTitleData.link}>
      {postTitleData.title}
    </Text>
  </Text>
);

PostTitle.propTypes = {
  postTitleData: PropTypes.object,
};
