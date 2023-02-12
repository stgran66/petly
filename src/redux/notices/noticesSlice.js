import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import operations from './operations';

const noticesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const { fetchNotices, addNotice } = operations;
const extraActions = [fetchNotices, addNotice];
const getActionsByType = type => extraActions.map(action => action[type]);
const onFetchSuccessReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};
const onAddSuccessReducer = (state, action) => {
  state.items = [action.payload, ...state.items];
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
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});

const noticesReducer = noticesSlice.reducer;

export default noticesReducer;
