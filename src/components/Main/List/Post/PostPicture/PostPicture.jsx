import style from './PostPicture.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const PostPicture = ({imageDate}) => {
  if (!imageDate) {
    return <img className={style.img} src={notphoto} alt="Нет картинки" />;
  } else {
    return <img className={style.img}
      src={imageDate.src} alt={imageDate.alt} />;
  }
};

PostPicture.propTypes = {
  imageDate: PropTypes.object,
};
