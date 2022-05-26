import style from './Rating.module.css';
import PropTypes from 'prop-types';

export const Rating = ({ratingUps}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />
    <p className={style.ups}>{ratingUps}</p>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ratingUps: PropTypes.number,
};
