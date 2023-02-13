import { createSlice } from '@reduxjs/toolkit';
import userOperations from './operations';

const {
  fetchUserData,
  updateUserData,
  updateUserFoto,
  deleteUserPet,
  addUserPet,
} = userOperations;

const userInitialState = {
  userInfo: {
    _id: '',
    email: '',
    name: '',
    city: '',
    phone: '',
    birthday: '',
    avatarURL: '',
    favorite: [],
    pets: [],
  },
  isLoading: false,
  error: null,
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
      state.userInfo = payload.user;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUserData.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [updateUserData.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [updateUserData.fulfilled](state, { payload }) {
      state.userInfo = payload;
      state.isLoading = false;
      state.error = null;
    },

    [updateUserData.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [updateUserFoto.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [updateUserFoto.fulfilled](state, { payload }) {
      state.userInfo.avatarURL = payload.avatarURL;
      // state.userInfo = { ...payload.user, avatarURL: payload.avatarURL };
      state.isLoading = false;
      state.error = null;
    },
    [updateUserFoto.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error;
    },

    [deleteUserPet.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.userInfo.pets = payload.pets;
      // const index = state.userInfo.pets.findIndex(
      //   pet => pet._id === payload._id
      // );
      // state.userInfo.pets.splice(index, 1);
    },

    [addUserPet.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addUserPet.fulfilled](state, { payload }) {
      state.userInfo.pets.push(payload);
      state.isLoading = false;
      state.error = false;
    },
    [addUserPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
