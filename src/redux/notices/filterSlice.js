import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
