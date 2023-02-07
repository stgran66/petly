import React from 'react';

import styles from './styled';

const { StyledContainer } = styles;

const FriendsContainer = ({ children }) => {
  return (
    <StyledContainer>
      <h2>Our Friends</h2>
      {children}
    </StyledContainer>
  );
};

export default FriendsContainer;
