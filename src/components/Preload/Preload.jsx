import ReactDOM from 'react-dom';
import style from './Preload.module.css';

export const Preload = () => ReactDOM.createPortal(
  <div className={style.overlay}>
    <div className={style.text}>
      <h2 className={style.load}>Загрузка ...</h2>
    </div>
  </div>,
  document.getElementById('preload-root'),
);
