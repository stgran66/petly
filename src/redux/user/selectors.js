const selectUserInfp = state => state.user.profile;
const selectLoadingUser = state => state.user.isLoading;
const selectErrorUser = state => state.user.error;
// const selectUserPets = state => state.user.profile.userPets;

const userSelectors = {
  selectUserInfp,
  selectLoadingUser,
  selectErrorUser,
  //   selectUserPets,
};
export default userSelectors;
