import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetchSongs from '../../hooks/useFetchSongs';
import axios from 'axios';

export const songList = createAsyncThunk('/songs', async () => {
  try {
    const { data: response } = await axios.get('/songs');
    console.log('response');
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  id: '',
  index: 0,
  name: '',
  songs: songList,
  favouriteSongs: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    test: (state) => {
      console.log(songList);
    },
    test2: (state) => {
      console.log(state);
    },
  },
});

export const { test } = playerSlice.actions;

export default playerSlice.reducer;
