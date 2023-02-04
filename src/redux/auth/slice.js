import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { register } = operations;

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

const registerSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(register.fulfilled, registerSuccessReducer),
});

const authReducer = authSlice.reducer;

export default authReducer;
