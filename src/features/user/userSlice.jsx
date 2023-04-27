import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  auth: false,
  loadingUsers: false,
  loadingLogin: false,
  found: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/getUsers', async () => {
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
    return 'Error';
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state = initialState;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    //Case when data is pending
    builder.addCase(loginUser.pending, (state) => {
      state.loadingLogin = true;
    });
    //Case when data are successfully fetched
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //Check if the used mail is equal to a user mail
      //Here there is only one object, with an object array there would be a .find method to check the mail
      if (state.users.email === action.meta.arg.email) {
        console.log('combaciano');
        localStorage.setItem('TOKEN_DATA', JSON.stringify(action.payload.data));
        state.auth = true;
        state.email = action.meta.arg.email;
        state.password = action.meta.arg.password;
        state.error = '';
      } else if (action.payload.includes('Error')) {
        console.log('Errore, non è possibile effettuare il login');
        state.error = 'Errore, non è possibile effettuare il login';
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

export const { logout } = userSlice.actions;

export default userSlice.reducer;
