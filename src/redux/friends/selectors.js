const selectFriends = state => state.friends.items;
const selectLoadingStatus = state => state.friends.isLoading;
const selectError = state => state.friends.error;

const friendsSelectors = {
  selectFriends,
  selectLoadingStatus,
  selectError,
};
export default friendsSelectors;
