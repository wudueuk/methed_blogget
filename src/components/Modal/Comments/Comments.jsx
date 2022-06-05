import PropTypes from 'prop-types';
import style from './Comments.module.css';
import PostDate from '../../Main/List/Post/PostDate';

export const Comments = ({comments}) => {
  if (comments) {
    (<ul className={style.list}>
      {comments.forEach((comment, id) => (
        <li className={style.item} key={id}>
          <h3 className={style.author} size={18} tsize={22}>
            {comment.author}
          </h3>
          <p className={style.comment} size={14} tsize={18}>
            {comment.body}
          </p>
          <PostDate date={comment.created} />
        </li>
      ))}
    </ul>);
  } else {
    (<p>Нет комментариев</p>);
  }
};

Comments.propTypes = {
  comments: PropTypes.array,
};
