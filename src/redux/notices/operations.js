import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchNotices = createAsyncThunk('notices/fetchByCategory', async (data, thunkAPI) => {
  const { category, page, query } = data;
  try {
    if (query) {
      const response = await axios.get(
        `/api/notices/${category}?query=${query}&page=${page}&limit=12`
      );
      return response.data;
    }
    const response = await axios.get(`/api/notices/${category}?page=${page}&limit=12`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const addNotice = createAsyncThunk('notices/addNotice', async (newNotice, thunkAPI) => {
  try {
    const response = await axios.post('/api/notices', newNotice);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const getFavorite = createAsyncThunk(
  'notices/favoriteNotices/',
  async ({ page, query }, thunkAPI) => {
    try {
      if (query) {
        const response = await axios.get(
          `/api/notices/favorite?query=${query}&page=${page}&limit=12`
        );
        return response.data;
      }
      const response = await axios.get(`/api/notices/favorite?page=${page}&limit=12`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const getMyNotices = createAsyncThunk('notices/myNotices', async ({ page, query }, thunkAPI) => {
  try {
    if (query) {
      const response = await axios.get(`/api/notices/own?query=${query}&page=${page}&limit=12`);
      return response.data;
    }
    const response = await axios.get(`/api/notices/own?page=${page}&limit=12`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteNotice = createAsyncThunk('notices/deleteNotice', async (noticeId, thunkAPI) => {
  try {
    const response = await axios.delete(`/api/notices/${noticeId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const operations = {
  fetchNotices,
  addNotice,
  getMyNotices,
  getFavorite,
  deleteNotice,
};
export default operations;
