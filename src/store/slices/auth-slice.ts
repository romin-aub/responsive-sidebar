import { StorageResolver } from '@/lib/storage';
import { verifyToken } from '@/utils/verify-token';
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
        const isTokenVerified = verifyToken(token, JSON.parse(user).username);
        if (!isTokenVerified) {
          state.isAuthenticated = false;
          state.user = null;
        }
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
    },
  },
});

export const { login, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
