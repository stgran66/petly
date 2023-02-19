import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchNews = createAsyncThunk('news/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/api/news`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export default fetchNews;
