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
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/api/user');
      // return response.data;
    } catch (e) {
      // return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const userOperations = { fetchUserData, updateUserData };

export default userOperations;
