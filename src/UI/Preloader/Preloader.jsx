import GridLoader from 'react-spinners/GridLoader';

export const Preloader = () => (
  <GridLoader color='#cc6633' css={{
    display: 'block',
    margin: '0 auto',
  }} size={30} margin={5} />
);
