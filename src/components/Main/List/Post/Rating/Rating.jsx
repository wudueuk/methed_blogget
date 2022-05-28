import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Rating = ({ratingUps}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />
    <Text As='p' size={12} tsize={16} bold
      className={style.ups}>{ratingUps}</Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ratingUps: PropTypes.number,
};
