import {useContext, useRef} from 'react';
import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const formSubmit = () => {
    console.log(textareaRef.current.value);
  };

  return (
    <form className={style.form}>
      <h3 size={14} tsize={18}>{auth.name}</h3>
      <textarea className={style.textarea}
        ref={textareaRef}></textarea>
      <button className={style.btn} onClick={() => {
        formSubmit();
      }}>Отправить</button>
    </form>
  );
};
