import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://petly-backend-9tz8.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:5000/api';

const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default fetchNotices;
