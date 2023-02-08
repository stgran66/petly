import { createSlice } from '@reduxjs/toolkit';
import fetchNotices from './operations';

const noticesInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const onFetchSuccessReducer = (state, action) => {
  state.items = action.payload;
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
      .addCase(fetchNotices.pending, onPendingReducer)
      .addCase(fetchNotices.rejected, onRejectedReducer),
});

const noticesReducer = noticesSlice.reducer;

export default noticesReducer;
