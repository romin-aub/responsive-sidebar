import { StorageResolver } from '@/lib/storage';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  isAuthenticated: boolean;
  user: {
    username: string;
  } | null;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; token: string }>,
    ) => {
      const { username, token } = action.payload;
      state.isAuthenticated = true;
      state.user = { username };
      StorageResolver.set('token', token);
      StorageResolver.set('user', JSON.stringify({ username }));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      StorageResolver.remove('token');
      StorageResolver.remove('user');
    },
    checkAuth: (state) => {
      const token = StorageResolver.get('token');
      const user = StorageResolver.get('user');
      if (token && user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
