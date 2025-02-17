import { StorageResolver } from '@/lib/storage';
import { safeParse } from '@/utils/safe-parse';
import { verifyToken } from '@/utils/verify-token';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  isAuthenticated: boolean;
  user: {
    username: string;
  } | null;
  role: number;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  role: 3,
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
      StorageResolver.set('role', JSON.stringify(initialState.role));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      StorageResolver.remove('token');
      StorageResolver.remove('user');
      StorageResolver.remove('role');
    },
    checkAuth: (state) => {
      const token = StorageResolver.get('token');
      const user = StorageResolver.get('user');
      const role = StorageResolver.get('role');
      const parsedUser = safeParse(user);
      const parsedRole = role ? Number(role) : null;
      state.isAuthenticated =
        token && parsedUser && parsedRole
          ? verifyToken(token, parsedUser.username)
          : false;
      state.user = state.isAuthenticated ? parsedUser : null;
    },
    updateRole: (state, action: PayloadAction<number>) => {
      StorageResolver.set('role', JSON.stringify(action.payload));
      state.role = action.payload;
    },
  },
});

export const { login, logout, checkAuth, updateRole } = authSlice.actions;

export default authSlice.reducer;
