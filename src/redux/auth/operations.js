import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-9tz8.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const register = createAsyncThunk(
  'auth/register',
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/signup', creds);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login', creds);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const operations = { register, login };

export default operations;
