'use client';

import { themes } from '@/config/themes';
import { setTheme } from '@/store/slices/theme-slice';
import type { RootState } from '@/store/store';
import { colors } from '@/theme/colors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    console.log('changes');
    // Set data-theme attribute on <html>
    document.documentElement.setAttribute('data-theme', theme);
    // Apply CSS variables dynamically
    const themeColors = colors[theme];

    if (themeColors) {
      for (const key of Object.keys(themeColors)) {
        const colorShades = themeColors[key as keyof typeof themeColors];

        for (const shade of Object.keys(colorShades)) {
          document.documentElement.style.setProperty(
            `--${key}-${shade}`,
            colorShades[shade as keyof typeof colorShades],
          );
        }
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    dispatch(setTheme(newTheme));
  };

  return { theme, toggleTheme };
};
