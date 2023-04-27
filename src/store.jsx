import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import userReducer from './features/user/userSlice';
import playerReducer from './features/player/playerSlice';
import albumReducer from './features/album/albumSlice';
import favoriteReducer from './features/favorite/favoriteSlice';
import artistReducer from './features/artists/artistsSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    album: albumReducer,
    artist: artistReducer,
    user: userReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
