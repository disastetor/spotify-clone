import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const url = '/songs';
const initialState = {
  loading: false,
  songs: [],
  error: '',
  isPlaying: false,
  shuffleActive: false,
  currentSong: '',
  currentSongId: '',
  currentSongAuthor: '',
  currentSongAuthorId: '',
  currentSongAlbumId: '',
  index: 0,
};

export const fetchSong = createAsyncThunk('user/getUses', async () => {
  return await axios.get(url).then((res) => res.data);
});

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, { payload }) => {
      const { name, index, id, authorId, albumId, authorName } = payload;
      state.isPlaying = true;
      state.currentSong = name;
      state.index = index;
      state.currentSongId = id;
      state.currentSongAuthorId = authorId;
      state.currentSongAlbumId = albumId;
      state.currentSongAuthor = authorName;
    },
    nextSong: (state, { payload }) => {
      state.isPlaying = true;
      //Increment index value (if shuffle button is active pick a random index)
      state.shuffleActive
        ? (state.index = Math.floor(Math.random() * (payload.songs.length - 1)))
        : (state.index += 1);
      console.log(state.index);
      //Check if there is a song next to the current, if not restart from the first song
      if (state.index < payload.songs.length) {
        //find and store the song with the relative index
        const nextSong = payload.songs.filter((song, index) => {
          if (index === state.index) {
            return song.name;
          }
        });
        state.currentSong = nextSong[0].name;
      } else {
        state.index = 0;
        state.currentSong = payload.songs[0].name;
      }
    },
    //Same logic as the nextSong but if the user tries to further back than the first song
    //will be reproduced only the first song
    previousSong: (state, { payload }) => {
      state.isPlaying = true;
      state.index -= 1;
      if (state.index >= 0) {
        const nextSong = payload.songs.filter((song, index) => {
          if (index === state.index) {
            return song.name;
          }
        });
        state.currentSong = nextSong[0].name;
      } else {
        state.index = 0;
        state.currentSong = payload.songs[0].name;
      }
    },
    shuffle: (state) => {
      state.shuffleActive = !state.shuffleActive;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSong.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSong.fulfilled, (state, action) => {
      state.loading = false;
      state.songs = action.payload;
      state.error = '';
    });
    builder.addCase(fetchSong.rejected, (state, action) => {
      state.loading = false;
      state.songs = [];
      state.error = action.error.message;
    });
  },
});

export const { play, nextSong, previousSong, shuffle } = playerSlice.actions;

export default playerSlice.reducer;
