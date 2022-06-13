import React from 'react';
import PropTypes from 'prop-types';

export const tokenContext = React.createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, setToken] = React.useState('');

  return (
    <tokenContext.Provider value={{token, setToken}}>
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
