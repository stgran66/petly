import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix'
 
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
  async (creds) => {
    try {
      const response = await axios.post('/api/auth/signup', creds);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
        return Notiflix.Notify.info(e.message);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (creds) => {
    try {
      const response = await axios.post('/api/auth/login', creds);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
       return Notiflix.Notify.info(e.message);
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    clearAuthHeader();
  } catch (e) {
    return Notiflix.Notify.info(e.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return Notiflix.Notify.info('Unable to fetch user');
  
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/api/auth/current');
    return response.data;
  } catch (e) {
    return Notiflix.Notify.info(e.message);;
  }
});

const operations = { register, logOut, login, refreshUser };

export default operations;
