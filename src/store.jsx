import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal/modalSlice';
import userReducer from './features/user/userSlice';
import playerReducer from './features/player/playerSlice';
export const store = configureStore({
  reducer: {
    player: playerReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
