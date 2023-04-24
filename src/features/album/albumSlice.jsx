import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const initialState = {
  loading: false,
  albums: [],
  error: '',
};

export const fetchAlbum = createAsyncThunk('album/getAlbums', async () => {
  return await axios.get('/albums').then((res) => res.data);
});

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    test: (state) => {
      console.log('hello');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.loading = false;
      state.albums = action.payload;
      state.error = '';
    });
    builder.addCase(fetchAlbum.rejected, (state, action) => {
      state.loading = false;
      state.albums = [];
      state.error = action.error.message;
    });
  },
});

export const { test } = albumSlice.actions;

export default albumSlice.reducer;
