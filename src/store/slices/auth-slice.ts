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
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
