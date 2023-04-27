import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const initialState = {
  loading: false,
  artists: [],
  error: '',
};

export const fetchArtists = createAsyncThunk('artists/getArtists', async () => {
  return await axios.get('/artists').then((res) => res.data);
});

const artistSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArtists.fulfilled, (state, action) => {
      state.loading = false;
      state.artists = action.payload;
      state.error = '';
    });
    builder.addCase(fetchArtists.rejected, (state, action) => {
      state.loading = false;
      state.artists = [];
      state.error = action.error.message;
    });
  },
});

export const { reset } = artistSlice.actions;

export default artistSlice.reducer;
