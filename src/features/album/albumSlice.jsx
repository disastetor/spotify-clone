import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const initialState = {
  loading: false,
  albums: [],
  error: '',
};

export const fetchAlbum = createAsyncThunk('album/getAlbums', async () => {
  const { data } = await axios.get('/albums');
  return data;
});

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbum.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.albums = [...action.payload.albums];
      state.error = '';
    });
    builder.addCase(fetchAlbum.rejected, (state, action) => {
      state.loading = false;
      state.albums = [];
      state.error = action.error.message;
    });
  },
});

export const { reset } = albumSlice.actions;

export default albumSlice.reducer;
