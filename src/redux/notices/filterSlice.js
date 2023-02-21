import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
  queryValue: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
    setQueryValue(state, action) {
      state.queryValue = action.payload;
    },
  },
});

export const { setFilter, setQueryValue } = filterSlice.actions;

const filterReducer = filterSlice.reducer;

export default filterReducer;
