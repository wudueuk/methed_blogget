import {useState} from 'react';
import {URL_API} from '../api/const';

export const useAuth = () => {
  const [auth, setAuth] = useState({});

  const getAuth = token => {
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          localStorage.removeItem('bearer');
        }
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
      });
  };

  return [auth, getAuth];
};
