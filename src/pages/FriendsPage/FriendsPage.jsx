import React, { useEffect, useState } from 'react';
import axios from 'axios';

import friendsComponents from 'components/Friends';

const { Friend, FriendsList } = friendsComponents;

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
    <>
      <h2>Our Friends</h2>
      {friends.length > 0 ? (
        <FriendsList>
          {friends.map(friend => (
            <li key={friend._id}>
              <Friend />
            </li>
          ))}
        </FriendsList>
      ) : (
        <></>
      )}
    </>
  );
};

export default FriendsPage;
