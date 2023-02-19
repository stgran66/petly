const selectNews = state => state.news.items;
const selectLoadingStatus = state => state.news.isLoading;
const selectError = state => state.news.error;

const newsSelectors = {
  selectNews,
  selectLoadingStatus,
  selectError,
};
export default newsSelectors;