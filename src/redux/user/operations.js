import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const fetchUserData = createAsyncThunk(
  'user/fetchData',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.user.token;

    if (persisterToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await axios.get('/api/user/get');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const userLogOut = createAsyncThunk('api/user/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/user/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = { fetchUserData, userLogOut };

export default operations;
