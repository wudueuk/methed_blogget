import PropTypes from 'prop-types';

export const SvgImg = prop => {
  const {url, className, width, height, alt} = prop;
  return <img src={url} className={className} width={width} height={height}
    alt={alt} />;
};

SvgImg.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};
