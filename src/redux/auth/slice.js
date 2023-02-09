import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { register, logOut, login } = operations;

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
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.pending](state) {
      state.isLoggedIn = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload
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
