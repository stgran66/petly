import { createSelector } from '@reduxjs/toolkit';

export const selectNotices = state => state.notices.items;
export const selectFilter = state => state.filter.value;

export const selectFilteredList = createSelector(
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
