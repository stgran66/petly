import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { register, logOut } = operations;

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,

  isLoggedIn: false, //Add logic for redirecting  or true
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {
      state = action.payload;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [register.rejected](state, action) {
      state = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
