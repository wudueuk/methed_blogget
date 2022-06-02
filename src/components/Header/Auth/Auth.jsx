import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useAuth(token);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth(token);
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
