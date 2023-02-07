import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { register,
  // login
} = operations;

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

const registerSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

// const loginSuccessReducer = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerSuccessReducer)
      // .addCase(login.fulfilled, loginSuccessReducer),
});

const authReducer = authSlice.reducer;

export default authReducer;
