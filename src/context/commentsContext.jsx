import React from 'react';
import PropTypes from 'prop-types';
import {useCommentsData} from '../hooks/useCommentsData';

export const commentsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [comments] = useCommentsData();

  return (
    <commentsContext.Provider value={{comments}}>
      {children}
    </commentsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
