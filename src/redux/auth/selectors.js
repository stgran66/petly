const selectUser = state => state.auth.user;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectIsRefreshing = state => state.auth.isRefreshing;

const selectError = state => state.auth.error;

const select = {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
};
export default select;
