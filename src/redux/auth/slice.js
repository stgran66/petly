import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { register, logOut, login, refreshUser } = operations;

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = { email: action.payload.email, name: action.payload.name };
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [register.pending](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = null;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [login.pending](state) {
      state.isLoggedIn = false;
      state.error = null;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isRefreshing = false;
    },
    [refreshUser.pending](state, action) {
      state.isLoggedIn = false;
      state.error = null;
      state.isRefreshing = true;
    },
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
