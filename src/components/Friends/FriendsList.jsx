import React from 'react';

import styles from './styled';

const { StyledList } = styles;

const FriendsList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default FriendsList;
