import React, { useEffect, useState } from 'react';
import axios from 'axios';

import friendsComponents from 'components/Friends';

const { Friend, FriendsList, FriendsContainer } = friendsComponents;

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const { data } = await axios.get('/api/services');
        setFriends(data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, []);
  console.log(friends);
  return (
    <FriendsContainer>
      {friends.length > 0 ? (
        <FriendsList>
          {friends.map(friend => (
            <li key={friend._id}>
              <Friend friend={friend} />
            </li>
          ))}
        </FriendsList>
      ) : (
        <></>
      )}
    </FriendsContainer>
  );
};

export default FriendsPage;
