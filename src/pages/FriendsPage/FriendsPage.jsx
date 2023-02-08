import React from 'react';

import friendsComponents from 'components/Friends';

const { FriendsContainer, FriendsList } = friendsComponents;

const FriendsPage = () => {
  return (
    <FriendsContainer>
      <FriendsList />
    </FriendsContainer>
  );
};

export default FriendsPage;
