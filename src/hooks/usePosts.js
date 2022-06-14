import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
/* import {tokenContext} from '../context/tokenContext'; */
import {useSelector} from 'react-redux';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  /* const {token} = useContext(tokenContext); */
  const token = useSelector(state => state.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best?limit=20`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({data}) => {
        setPosts(data.children);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [posts];
};
