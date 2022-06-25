import style from './ErrorLogin.module.css';

export const ErrorLogin = () => {
  console.log('style: ', style);
  return <div className={style.box}>Ошибка получения данных
    пользователя с сайта Reddit</div>;
};
