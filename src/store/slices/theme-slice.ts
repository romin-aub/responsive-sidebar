import { defaultTheme } from '@/config/themes';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: defaultTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
