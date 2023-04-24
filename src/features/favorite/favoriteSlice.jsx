import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteSongs: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, { payload }) => {
      console.log(payload);
      const found = state.favoriteSongs.find((song) => {
        if (song.id === payload.id) {
          return true;
        } else {
          return false;
        }
      });
      if (found) {
        state.favoriteSongs = state.favoriteSongs.filter((song) => {
          return song.id !== payload.id;
        });
      } else {
        state.favoriteSongs.push(payload);
      }
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
