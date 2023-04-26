import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
const url = '/songs';
const initialState = {
  loading: false,
  songs: [],
  error: '',
  isPlaying: false,
  shuffleActive: false,
  repeatActive: false,
  currentSong: '',
  currentSongId: '',
  currentSongAuthor: '',
  currentSongAuthorId: '',
  currentSongAlbumId: '',
  cover: '',
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
      const { name, index, id, authorId, albumId, authorName, cover } = payload;
      state.isPlaying = true;
      state.currentSong = name;
      state.index = index;
      state.currentSongId = id;
      state.currentSongAuthorId = authorId;
      state.currentSongAlbumId = albumId;
      state.currentSongAuthor = authorName;
      state.cover = cover;
    },
    nextSong: (state, { payload }) => {
      state.isPlaying = true;
      //Increment index value (if shuffle button is active pick a random index)
      //But only if the repeat button is not active
      state.shuffleActive && !state.repeatActive
        ? (state.index = Math.floor(Math.random() * (payload.songs.length - 1)))
        : (state.index += 0);

      !state.shuffleActive && !state.repeatActive
        ? (state.index += 1)
        : (state.index += 0);

      console.log(payload.songs);

      //Check if there is a song next to the current, if not restart from the first song
      if (state.index < payload.songs.length) {
        //find and store the song with the relative index
        const nextSong = payload.songs.filter((song, index) => {
          if (index === state.index) {
            return song;
          }
        });
        console.log(nextSong);
        state.currentSongId = nextSong[0].id;
        state.currentSong = nextSong[0].name;
        state.currentSongAlbumId = nextSong[0].albumId;
        state.currentSongAuthorId = nextSong[0].authorId;
        state.currentSongAuthorName = nextSong[0].authorName;
        state.cover = nextSong[0].cover;
      } else {
        state.index = 0;
        state.currentSongId = payload.songs[0].id;
        state.currentSong = payload.songs[0].name;
        state.currentSongAlbumId = payload.songs[0].albumId;
        state.currentSongAuthorId = payload.songs[0].authorId;
        state.currentSongAuthorName = payload.songs[0].authorName;
        state.cover = payload.songs[0].cover;
      }
    },
    //Same logic as the nextSong but if the user tries to further back than the first song
    //will be reproduced only the first song
    previousSong: (state, { payload }) => {
      state.isPlaying = true;
      if (state.index >= 0) {
        state.index -= 1;
      } else state.index = 0;

      const prevSong = payload.songs.filter((song, index) => {
        if (index === state.index) {
          return song.name;
        }
      });
      state.currentSongId = prevSong[0].id;
      state.currentSong = prevSong[0].name;
      state.currentSongAlbumId = prevSong[0].albumId;
      state.currentSongAuthorId = prevSong[0].authorId;
      state.currentSongAuthorName = prevSong[0].authorName;
      state.cover = prevSong[0].cover;
    },
    shuffle: (state) => {
      state.shuffleActive = !state.shuffleActive;
    },
    repeat: (state) => {
      state.repeatActive = !state.repeatActive;
    },
    handleplay: (state) => {
      if (state.currentSong !== '') {
        state.isPlaying = !state.isPlaying;
      }
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

export const { play, nextSong, previousSong, shuffle, repeat, handleplay } =
  playerSlice.actions;

export default playerSlice.reducer;
