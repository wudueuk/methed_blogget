import PropTypes from 'prop-types';
import style from './Comments.module.css';
import {Text} from '../../../UI/Text';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments.length ? (
      comments.map((item) => item.data.body && (
        <li className={style.item} key={item.data.id}>
          <Text As='h3' className={style.author} size={18} tsize={22}>
            {item.data.author}
          </Text>
          <Text As='p' className={style.comment} size={14} tsize={18}>
            {item.data.body.replaceAll(`&gt;`, ' ')}
          </Text>
          {/* <PostDate date={item.data.created} /> */}
        </li>
      ))
    ) : (
      <p>Нет комментариев</p>
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
