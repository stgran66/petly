import React, { useEffect } from 'react';

import friendsComponents from 'components/Friends';
import { useDispatch, useSelector } from 'react-redux';
import friendsSelectors from 'redux/friends/selectors';
import fetchFriends from 'redux/friends/operations';
import NotFound from 'components/notices/NotFound';
import Loader from 'components/Loader';

const { Friend, FriendsList, FriendsContainer } = friendsComponents;
const { selectFriends, selectError, selectLoadingStatus } = friendsSelectors;

const FriendsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const friends = useSelector(selectFriends);
  const error = useSelector(selectError);

  // console.log('error', error);
  // console.log('loading', isLoading);
  // console.log('friends', friends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <FriendsContainer>
      {error && <NotFound />}
      {isLoading && <Loader />}
      {friends.length > 0 && (
        <FriendsList>
          {friends.map(friend => (
            <li key={friend._id}>
              <Friend friend={friend} />
            </li>
          ))}
        </FriendsList>
      )}
    </FriendsContainer>
  );
};

export default FriendsPage;
