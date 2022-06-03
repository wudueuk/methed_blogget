import style from './PostDate.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';

export const PostDate = ({dateTime}) => (
  <time className={style.date}>{formatDate(dateTime)}</time>
);

PostDate.propTypes = {
  dateTime: PropTypes.number,
};
