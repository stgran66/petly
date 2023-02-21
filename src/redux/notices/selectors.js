import { createSelector } from '@reduxjs/toolkit';

const selectNotices = state => state.notices.items;
const totalNotices = state => state.notices.total;
const selectFilter = state => state.filter.value;
const selectQueryFilter = state => state.filter.queryValue;
const selectLoadingStatus = state => state.notices.isLoading;
const selectErrorMessage = state => state.notices.error;

const selectFilteredList = createSelector(
  [selectNotices, selectFilter],
  (noticesList, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    const filteredNotices = filterValue
      ? noticesList.filter(notice => notice.title.toLowerCase().includes(normalizedFilter))
      : noticesList;

    return filteredNotices;
  }
);
const selectors = {
  selectNotices,
  selectFilter,
  selectQueryFilter,
  selectFilteredList,
  selectLoadingStatus,
  selectErrorMessage,
  totalNotices,
};
export default selectors;
