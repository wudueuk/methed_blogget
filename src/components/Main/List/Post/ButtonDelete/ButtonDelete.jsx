import style from './ButtonDelete.module.css';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const ButtonDelete = () => (
  <button className={style.delete}>
    <DeleteIcon width={24} height={24} />
  </button>
);
