import { createSlice } from '@reduxjs/toolkit';
import userOperations from './operations';

const { fetchUserData } = userOperations;

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
      state.isLoading = false;
      state.error = null;
      // state.userPets = [...payload.userPets];
    },
    [fetchUserData.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
