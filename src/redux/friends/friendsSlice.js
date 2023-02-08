import { createSlice } from '@reduxjs/toolkit';
import fetchFriends from './operations';

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
  state.items = [];
};
const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const friendsSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchFriends.fulfilled, onFetchSuccessReducer)
      .addCase(fetchFriends.pending, onPendingReducer)
      .addCase(fetchFriends.rejected, onRejectedReducer),
});

const friendsReducer = friendsSlice.reducer;

export default friendsReducer;
