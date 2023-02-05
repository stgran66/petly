import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const register = createAsyncThunk(
  'auth/register',
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', creds);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const operations = { register };

export default operations;
