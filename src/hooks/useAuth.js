import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
/* import {tokenContext} from '../context/tokenContext'; */
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  /*  const {token, delToken} = useContext(tokenContext); */
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

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
