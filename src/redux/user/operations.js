import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserData = createAsyncThunk(
  'user/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user');
      // console.log(response.data);
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
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const userOperations = { fetchUserData, updateUserData, updateUserFoto };

export default userOperations;
