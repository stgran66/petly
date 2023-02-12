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
      state.error = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
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
