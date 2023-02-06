import { createSlice } from '@reduxjs/toolkit';
import { defaultItems } from './constants';

const noticesInitialState = {
  items: defaultItems,
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
});

export const noticesReducer = noticesSlice.reducer;
