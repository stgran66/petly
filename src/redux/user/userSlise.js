import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const { fetchUserData, userLogOut } = operations;

const userInitialState = {
  profile: {
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
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: {
    [fetchUserData.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchUserData.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.error = null;
      // state.userPets = [...payload.userPets];
    },
    [fetchUserData.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [userLogOut.fulfilled](store) {
      store.body = { name: null, email: null, password: null };
      store.token = null;
      store.isLoggedIn = false;
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
