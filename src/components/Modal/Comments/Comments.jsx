import PropTypes from 'prop-types';
import style from './Comments.module.css';
/* import PostDate from '../../Main/List/Post/PostDate'; */

export const Comments = ({comments}) => {
  if (comments) {
    return (
      <ul className={style.list}>
        {
          comments.map((item, i) => (
            <li className={style.item} key={i}>
              <h3 className={style.author} size={18} tsize={22}>
                {item.author}
              </h3>
              <p className={style.comment} size={14} tsize={18}>
                {item.body}
              </p>
              {/* <PostDate date={item.created} /> */}
            </li>
          ))
        }
      </ul>
    );
  } else {
    return (<p>Нет комментариев</p>);
  }
};

Comments.propTypes = {
  comments: PropTypes.array,
};
