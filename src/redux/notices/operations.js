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
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/favorite`);
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
      const response = await axios.get('/api/notices/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavNotice = createAsyncThunk(
  '/notices/addFavNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/${noticeId}/favorite`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFavNotice = createAsyncThunk(
  '/notices/removeFavNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(`/${noticeId}/remove-favorite`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const operations = {
  fetchNotices,
  addNotice,
  getMyNotices,
  getFavorite,
  addFavNotice,
  removeFavNotice,
};
export default operations;
