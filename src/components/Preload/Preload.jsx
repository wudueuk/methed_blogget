import style from './Preload.module.css';

export const Preload = () => (
  <div className={style.overlay}>
    <div className={style.text}>
      <h2 className={style.load}>Загрузка ...</h2>
    </div>
  </div>
);
