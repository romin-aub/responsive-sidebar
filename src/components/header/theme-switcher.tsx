import { Themes } from '@/config/themes';
import { Switch } from '@/core/inputs/switch';
import { setTheme } from '@/store/slices/theme-slice';
import type { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const handleChange = () => {
    const newTheme = theme === Themes.dark ? Themes.light : Themes.dark;
    dispatch(setTheme(newTheme));
  };
  return <Switch defaultChecked onChange={handleChange} />;
};
