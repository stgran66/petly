import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserData = createAsyncThunk(
  'user/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/user');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const updateUserData = createAsyncThunk(
  'user/updateData',
  async (updateData, thunkAPI) => {
    try {
      const response = await axios.put('/api/auth/update', updateData);
      console.log(response.data);
      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

// const updateUserData = createAsyncThunk(
//   'user/updateData',
//   async (updateData, thunkAPI) => {
//     try {
//       const result = await axios.put('/api/auth/update', updateData);
//       console.log(result);
//       return result;
//     } catch ({ response }) {
//       return thunkAPI.rejectWithValue(response.data.message);
//     }
//   }
// );

const userOperations = { fetchUserData, updateUserData };

export default userOperations;
