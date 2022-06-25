import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import AuthLoader from './AuthLoader';
import ErrorLogin from './ErrorLogin';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, status, clearAuth] = useAuth();

  return (
    <div className={style.container}>
      {loading ? (<AuthLoader />) : auth.name ? (
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
              setShowLogout(false);
              clearAuth();
              dispatch(deleteToken());
            }}>Выйти</span> : ''}
        </div>
      ) : status === 'err' ?
        (<Text As='a' className={style.authLink} href={urlAuth}>
          <LoginIcon className={style.svg} width={128} height={128} />
          <ErrorLogin />
        </Text>) :
        (<Text As='a' className={style.authLink} href={urlAuth}>
          <LoginIcon className={style.svg} width={128} height={128} />
        </Text>)
      }
    </div>
  );
};
