import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('ACCESS_TOKEN')
  ? localStorage.getItem('ACCESS_TOKEN')
  : null;

const initialState = {
  users: [],
  id: '',
  email: '',
  auth: false,
  loadingUsers: false,
  loadingLogin: false,
  found: false,
  error: null,
  access_token: token,
};

export const fetchUsers = createAsyncThunk('users/getUsers', async () => {
  console.log('passa qui');
  return await axios.get('/user-info').then((res) => res.data);
});

export const loginUser = createAsyncThunk('loginUser', async (data) => {
  const { email, password } = data;
  try {
    return await axios.post(
      '/login',
      {
        email: email,
        password: password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLocalStorage: () => {
      localStorage.removeItem('TOKEN_DATA');
      localStorage.removeItem('ACCESS_TOKEN');
    },
    logout: (state) => {
      state.users = [];
      state.id = '';
      state.email = '';
      state.auth = null;
      state.access_token = '';
    },
  },
  extraReducers: (builder) => {
    //Case when data is pending
    builder.addCase(loginUser.pending, (state) => {
      state.loadingLogin = true;
    });
    //Case when data are successfully fetched
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //Check if there is an access token and store it
      if (action.payload?.data?.access_token) {
        localStorage.setItem('TOKEN_DATA', JSON.stringify(action.payload.data));
        localStorage.setItem('ACCESS_TOKEN', action.payload.data.access_token);
      }

      console.log(action.meta.arg.email);
      if (localStorage.getItem('ACCESS_TOKEN')) {
        state.access_token = localStorage.getItem('ACCESS_TOKEN');
        state.firstName = state.users.firstName;
        state.lastName = state.users.lastName;
        state.auth = true;
        state.email = action.meta.arg.email;
        state.error = '';
      } else {
        console.log(action.payload);
        state.error =
          'Errore: non è possibile effettuare il login, controlla le credenziali';
      }
      state.loadingLogin = false;
    });
    //Case if the request is rejected
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loadingLogin = false;
      state.auth = false;
      state.email = '';
      state.password = '';
      state.error = action.error.message;
    });
    //Case if the users fetch request is pending
    builder.addCase(fetchUsers.pending, (state) => {
      state.loadingUsers = true;
    });
    //Case if the users fetch request is completed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loadingUsers = false;
      state.users = action.payload;
      state.error = '';
    });
    //Case if the users fetch request is rejected
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loadingUsers = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { logout, clearLocalStorage } = userSlice.actions;

export default userSlice.reducer;
