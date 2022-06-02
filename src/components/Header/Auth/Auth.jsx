import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (token) {
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
        .catch(() => {
          setAuth({});
        });
    } else return;
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <div>
          <button
            className={style.btn}
            onClick={() => {
              showLogout ? setShowLogout(false) : setShowLogout(true);
            }}>
            <img className={style.img} src={auth.img} title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {showLogout ? <span className={style.logout}
            onClick={() => {
              console.log('clock logout');
              setShowLogout(false);
              setAuth({});
              delToken();
            }}>Выйти</span> : ''}
        </div>
      ) : (
        <Text As='a' className={style.authLink} href={urlAuth}>
          <LoginIcon className={style.svg} width={128} height={128} />
        </Text>)}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
