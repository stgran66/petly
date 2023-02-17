import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import operations from './operations';

const noticesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const { fetchNotices, addNotice, getFavorite, getMyNotices, deleteNotice } = operations;
const extraActions = [fetchNotices, addNotice, getFavorite, getMyNotices, deleteNotice];
const getActionsByType = type => extraActions.map(action => action[type]);
const onFetchSuccessReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};
const onAddSuccessReducer = (state, action) => {
  state.items = [...state.items, action.payload];
  state.isLoading = false;
  state.error = null;
};
const onFetchFavoriteSuccessReducer = (state, action) => {
  state.items = action.payload.favorite;
  state.isLoading = false;
  state.error = null;
};

const onFetchMyNoticesSuccessReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const onDeleteSuccessReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const onPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};
const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, onFetchSuccessReducer)
      .addCase(addNotice.fulfilled, onAddSuccessReducer)
      .addCase(getFavorite.fulfilled, onFetchFavoriteSuccessReducer)
      .addCase(getMyNotices.fulfilled, onFetchMyNoticesSuccessReducer)
      .addCase(deleteNotice.fulfilled, onDeleteSuccessReducer)
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});

const noticesReducer = noticesSlice.reducer;

export default noticesReducer;
