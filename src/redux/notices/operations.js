import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchNotices = createAsyncThunk(
  'notices/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (newNotice, thunkAPI) => {
    try {
      const response = await axios.post('/api/notices', newNotice);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFavorite = createAsyncThunk(
  'notices/favoriteNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/favorite');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMyNotices = createAsyncThunk(
  'notices/myNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/my-notices');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const operations = { fetchNotices, addNotice, getMyNotices, getFavorite };
export default operations;
