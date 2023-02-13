import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserData = createAsyncThunk(
  'user/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const updateUserData = createAsyncThunk(
  'user/updateData',
  async (updateData, thunkAPI) => {
    try {
      const response = await axios.put('/api/auth/update', updateData);
      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

const updateUserFoto = createAsyncThunk(
  'user/updateUserFoto',
  async (newData, thunkAPI) => {
    try {
      const response = await axios.patch('/api/auth/avatars', newData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const deleteUserPet = createAsyncThunk(
  'user/deleteUserPet',
  async (petId, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/user/pet/${petId}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async (newData, thunkAPI) => {
    try {
      const response = await axios.post(`/api/user/pet`, newData);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const userOperations = {
  fetchUserData,
  updateUserData,
  updateUserFoto,
  deleteUserPet,
  addUserPet,
};

export default userOperations;
