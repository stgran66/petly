import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-backup.onrender.com';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk(
  'auth/register',
  async (creds, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/signup', creds);
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
      const response = await axios.post('/api/auth/login', creds);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);



const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = { register, logOut, login };


export default operations;
