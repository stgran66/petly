import { createSlice } from '@reduxjs/toolkit';

const themeInitialState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});
export const { changeTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export default themeReducer;
