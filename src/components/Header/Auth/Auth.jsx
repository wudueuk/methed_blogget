import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState, useContext} from 'react';
/* import {tokenContext} from '../../../context/tokenContext'; */
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  /* const {delToken} = useContext(tokenContext); */
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

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
              clearAuth();
              dispatch(deleteToken());
            }}>Выйти</span> : ''}
        </div>
      ) : (
        <Text As='a' className={style.authLink} href={urlAuth}>
          <LoginIcon className={style.svg} width={128} height={128} />
        </Text>)}
    </div>
  );
};
