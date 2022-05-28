import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Text.module.css';

export const Text = prop => {
  const {
    As = 'span',
    id,
    color = 'black',
    size,
    tsize,
    dsize,
    bold,
    medium,
    className,
    children,
    href,
    center,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.bold]: bold},
    {[style.medium]: medium},
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );

  return (<As className={classes} id={id} onClick={onClick}
    href={href}>{children}</As>);
};

Text.propTypes = {
  As: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  onClick: PropTypes.func,
};
