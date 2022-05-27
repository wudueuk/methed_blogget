import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      id: 1,
      thumbnail: '',
      title: {
        title: 'Заголовок1',
        link: '#post',
      },
      author: {
        nicname: 'Nicname1',
        link: '#author',
      },
      ups: 2,
      date: '2022-05-25T15:00:00.000Z',
    },
    {
      id: 2,
      thumbnail: '',
      title: {
        title: 'Заголовок2',
        link: '#post',
      },
      author: {
        nicname: 'Nicname2',
        link: '#author',
      },
      ups: 24,
      date: '2022-05-26T16:00:01.000Z',
    },
    {
      id: 3,
      thumbnail: '',
      title: {
        title: 'Заголовок3',
        link: '#post',
      },
      author: {
        nicname: 'Nicname3',
        link: '#author',
      },
      ups: 24,
      date: '2022-05-24T05:02:00.000Z',
    },
    {
      id: 4,
      thumbnail: '',
      title: {
        title: 'Заголовок4',
        link: '#post',
      },
      author: {
        nicname: 'Nicname4',
        link: '#author',
      },
      ups: 24,
      date: '2022-05-27T05:33:21.000Z',
    },
  ];
  return (
    <ul className={style.list} >
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
