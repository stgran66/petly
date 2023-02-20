const selectUserInfo = state => state.user.userInfo;
const selectLoadingUser = state => state.user.isLoading;
const selectErrorUser = state => state.user.error;
// const selectUserPets = state => state.user.profile.userPets;
const selectUserFavorites = state => state.user.userInfo.favorite;
const selectUserId = state => state.user.userInfo._id;
const selectLoadingAvatar = state => state.user.avatarIsLoading;

const userSelectors = {
  selectUserInfo,
  selectLoadingUser,
  selectErrorUser,
  //   selectUserPets,
  selectUserFavorites,
  selectUserId,
  selectLoadingAvatar,
};
export default userSelectors;
