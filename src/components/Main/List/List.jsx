import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: {
      title: 'Заголовок',
      link: '#post',
    },
    author: {
      nicname: 'Nicname',
      link: '#author',
    },
    ups: 24,
    date: '2022-05-25T15:00:00.000Z',
  };
  return (
    <ul className={style.list} >
      <Post postData={postData} />
    </ul>
  );
};
