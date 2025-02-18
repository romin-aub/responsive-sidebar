import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth-slice';
import { themeSlice } from './slices/theme-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
