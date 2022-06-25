import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import Preloader from '../../UI/Preloader';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);
  const [commentsData, status] = useCommentsData({id});

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  const keyDownEsc = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', keyDownEsc);
    return () => {
      document.removeEventListener('click', handleClick);
      document.addEventListener('keydown', keyDownEsc);
    };
  }, []);

  if (commentsData.length > 0) {
    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {status === 'loading' && <Preloader />}
          {status === 'loaded' && (
            <>
              <h2 className={style.title}>{commentsData[0].title}</h2>

              <div className={style.content}>
              </div>

              <p className={style.author}>{commentsData[0].author}</p>
              <FormComment />

              <Comments comments={commentsData[1]} />
            </>
          )}
          <button className={style.close} onClick={() => {
            closeModal();
          }}>
            <CloseIcon />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  } else {
    return ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {status === 'loading' && <Preloader />}
          {status === 'error' && (
            <>
              <h2 className={style.title}>Ошибка загрузки данных</h2>
            </>
          )}
          <button className={style.close} onClick={() => {
            closeModal();
          }}>
            <CloseIcon />
          </button>
        </div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
