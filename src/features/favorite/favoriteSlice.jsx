import { createSlice } from '@reduxjs/toolkit';

const favorite = localStorage.getItem('FAVOURITE_SONGS')
  ? localStorage.getItem('FAVOURITE_SONGS')
  : [];

const initialState = {
  favoriteSongs: [],
  savedList: favorite,
};
console.log(favorite);
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorite: (state, { payload }) => {
      const found = state.favoriteSongs.find((song) => {
        //Search if the current liked song is already in the favorite list
        if (song.id === payload.id) {
          return true;
        } else {
          return false;
        }
      });

      //If is already inside the list remove it (like button is pressed for the second time so the song is removed from favorite)
      //If not, add the current song to the list
      if (found) {
        state.favoriteSongs = state.favoriteSongs.filter((song) => {
          return song.id !== payload.id;
        });
      } else {
        state.favoriteSongs.push(payload);
      }
      localStorage.setItem(
        'FAVOURITE_SONGS',
        JSON.stringify(state.favoriteSongs)
      );
    },
    reset: () => initialState,
  },
});

export const { setFavorite, reset } = favoriteSlice.actions;

export default favoriteSlice.reducer;
