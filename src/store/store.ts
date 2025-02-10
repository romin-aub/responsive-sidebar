import { configureStore } from '@reduxjs/toolkit';
import { roleSlice } from './role-slice';

export const store = configureStore({
  reducer: {
    role: roleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
