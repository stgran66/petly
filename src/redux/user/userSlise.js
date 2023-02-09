import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { fetchUserData } = operations;

const userInitialState = {
  user: {
    email: null,
    name: null,
    city: null,
    phone: null,
    birthday: null,
    avatarURL: null,
  },
  // userPets: [],
  // favorite: [],
  isLoading: false,
  error: null,
  token: null,
};

const onPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

const onFetchSuccessReducer = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.error = null;
  // state.userPets = [...payload.userPets];
};

const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUserData.fulfilled, onFetchSuccessReducer)
      .addCase(fetchUserData.pending, onPendingReducer)
      .addCase(fetchUserData.rejected, onRejectedReducer),
});

const userReducer = userSlice.reducer;

export default userReducer;
