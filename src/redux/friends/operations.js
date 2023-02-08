import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchFriends = createAsyncThunk('friends/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/api/services`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export default fetchFriends;
