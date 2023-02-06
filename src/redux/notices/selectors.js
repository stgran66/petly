import { createSelector } from '@reduxjs/toolkit';

const selectNotices = state => state.notices.items;
const selectFilter = state => state.filter.value;
const selectFilteredList = createSelector(
  [selectNotices, selectFilter],
  (noticesList, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();

    const filteredNotices = filterValue
      ? noticesList.filter(notice =>
          notice.title.toLowerCase().includes(normalizedFilter)
        )
      : noticesList;

    return filteredNotices;
  }
);
const selectors = { selectNotices, selectFilter, selectFilteredList };
export default selectors;
