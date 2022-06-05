import style from './FormComment.module.css';

export const FormComment = () => (
  <form className={style.form}>
    <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
    <textarea className={style.textarea}></textarea>
    <button className={style.btn}>Отправить</button>
  </form>
);
