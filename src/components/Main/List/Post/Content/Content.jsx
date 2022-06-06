import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';
import Preload from '../../../../Preload';

export const Content = ({author, postTitle, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size={14} tsize={22} dsize={30} bold
          className={style.linkPost}
          href='#'
          onClick={() => {
            setIsPreloader(true);
            setIsModalOpen(true);
          }}>
          {postTitle}
        </Text>
      </Text>
      <Text As='a' size={12} tsize={14} color='orange'
        className={style.linkAuthor} href='/#'>
        {author}
      </Text>
      {isPreloader && (<Preload />)}
      {isModalOpen && (<Modal id={id} closeModal={() => {
        setIsModalOpen(false);
      }} closePreloader={() => {
        setIsPreloader(false);
      }} />)}
    </div>
  );
};

Content.propTypes = {
  author: PropTypes.string,
  postTitle: PropTypes.string,
  id: PropTypes.string,
};
