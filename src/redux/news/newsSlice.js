import { createSlice } from '@reduxjs/toolkit';
import fetchNews from './operations';

const newsInitialState = {
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

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNews.fulfilled, onFetchSuccessReducer)
      .addCase(fetchNews.pending, onPendingReducer)
      .addCase(fetchNews.rejected, onRejectedReducer),
});

const newsReducer = newsSlice.reducer;

export default newsReducer;
