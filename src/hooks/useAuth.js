import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';
import {deleteToken} from '../store';
import {useDispatch} from 'react-redux';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
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
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
