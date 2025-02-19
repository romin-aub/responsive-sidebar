import { themes } from '@/config/themes';
import { Switch } from '@/core/inputs/switch';
import { useTheme } from '@/store/hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Switch checked={theme === themes.dark} onCheckedChange={toggleTheme} />
  );
};
