import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import userReducer from './features/user/userSlice';
import playerReducer from './features/player/playerSlice';
import albumReducer from './features/album/albumSlice';
import favoriteReducer from './features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    album: albumReducer,
    user: userReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
  },
});
