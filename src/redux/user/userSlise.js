import { createSlice } from '@reduxjs/toolkit';
import userOperations from './operations';

const {
  fetchUserData,
  updateUserData,
  updateUserFoto,
  deleteUserPet,
  updateUserPet,
  addUserPet,
  addFavNotice,
  removeFavNotice,
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
  avatarIsLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    clearState(state, action) {
      state.userInfo = {
        _id: '',
        email: '',
        name: '',
        city: '',
        phone: '',
        birthday: '',
        avatarURL: '',
        favorite: [],
        pets: [],
      };
      state.isLoading = false;
      state.error = null;
    },
  },
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
      state.error = null;
    },
    [updateUserData.fulfilled](state, { payload }) {
      state.userInfo = payload;
      state.error = null;
    },

    [updateUserData.rejected](state, action) {
      state.error = action.payload;
    },

    [updateUserFoto.pending](state) {
      state.error = null;
      state.avatarIsLoading = true;
    },
    [updateUserFoto.fulfilled](state, { payload }) {
      state.userInfo.avatarURL = payload.avatarURL;
      state.error = null;
      state.avatarIsLoading = false;
    },
    [updateUserFoto.rejected](state, action) {
      state.error = action.error;
      state.avatarIsLoading = false;
    },

    [deleteUserPet.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.userInfo.pets.findIndex(pet => pet._id === payload._id);
      state.userInfo.pets.splice(index, 1);
    },

    [updateUserPet.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [updateUserPet.fulfilled](state, { payload }) {
      const index = state.userInfo.pets.findIndex(pet => pet._id === payload._id);
      state.userInfo.pets.splice(index, 1, payload);
      state.isLoading = false;
      state.error = null;
    },
    [updateUserPet.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
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
    [addFavNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      const newFavorite = state.userInfo.favorite.includes(action.payload)
        ? state.userInfo.favorite
        : [...state.userInfo.favorite, action.payload];
      console.log(newFavorite);
      state.userInfo.favorite = newFavorite;
    },
    [addFavNotice.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addFavNotice.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [removeFavNotice.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      const newFavorite = state.userInfo.favorite.filter(item => item !== action.payload);
      console.log(newFavorite);
      state.userInfo.favorite = newFavorite;
    },
    [removeFavNotice.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeFavNotice.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
  },
});

export const { clearState } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
