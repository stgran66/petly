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
  reducers: {
    filterByLost(state) {
      state.items = state.items.filter(item => item.lostStatus);
    },
    filterByGood(state) {
      state.items = state.items.filter(item => item.goodHandsStatus);
    },
    filterBySell(state) {
      state.items = state.items.filter(item => item.sellStatus);
    },
  },
});

export const { filterByLost, filterByGood, filterBySell } =
  noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
