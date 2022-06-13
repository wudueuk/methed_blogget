import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const token = getToken();

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
