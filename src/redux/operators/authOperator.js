import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connectios-api.herokuapp.com/';

export const loginThunk = createAsyncThunk(
  'users/login',
  async (credentials, thunkApi) => {
    try {
      console.log(credentials);
      const response = await axios.post('users/login', credentials);
      console.log(response);
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
