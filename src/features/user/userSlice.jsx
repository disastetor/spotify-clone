import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  loading: false,
  error: '',
  msg: '',
};

export const loginUser = createAsyncThunk('loginuser', async (body) => {
  const res = await axios.post('/login', {
    email: 'john.doe@test.com',
    password: 'Test123456!!',
  });
  return await res;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = localStorage.getItem('access_token');
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { addToken, logout } = userSlice.actions;

export default userSlice.reducer;
