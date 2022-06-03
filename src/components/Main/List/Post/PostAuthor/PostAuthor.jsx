import style from './PostAuthor.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostAuthor = ({authorData}) => (
  <Text As='a' size={12} tsize={14} color='orange'
    className={style.linkAuthor} href='/#'>
    {authorData}
  </Text>
);

PostAuthor.propTypes = {
  authorData: PropTypes.string,
};
