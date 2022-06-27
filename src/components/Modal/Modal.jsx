import ReactDOM from 'react-dom';
import {useParams, useNavigate} from 'react-router-dom';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import {Text} from '../../UI/Text';
import Preloader from '../../UI/Preloader';
import Markdown from 'markdown-to-jsx';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const data = useCommentsData(id);
  const {commentsData, status} = data;
  const {post, comments} = commentsData;

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const keyDownEsc = e => {
    if (e.keyCode === 27) {
      navigate(`/category/${page}`);
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

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader />}
        {status === 'error' && (
          <>
            <Text As='h2' className={style.title} size={22} tsize={26}>
              Ошибка загрузки данных
            </Text>
          </>
        )}
        {status === 'loaded' && (
          <>
            <Text As='h2' className={style.title} size={22} tsize={26}>
              {post.title}
            </Text>

            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>{post.selftext}</Markdown>
            </div>

            <Text As='p' className={style.author}>
              {post.author}
            </Text>

            <FormComment />

            <Comments comments={comments} />
          </>
        )}
        <button className={style.close} onClick={() => {
          navigate(`/category/${page}`);
        }}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
};
