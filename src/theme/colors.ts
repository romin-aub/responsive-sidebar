import { themes } from '@/config/themes';

export const colors = {
  [themes.dark]: {
    primary: {
      default: '#61bacf',
      10: '#76c2d4',
      20: '#89c9da',
      30: '#9bd1df',
      40: '#acd9e4',
      50: '#bde0ea',
    },
    secondary: {
      default: '#121212',
      10: '#282828',
      20: '#3f3f3f',
      30: '#575757',
      40: '#717171',
      50: '#8b8b8b',
    },
  },
  [themes.light]: {
    primary: {
      default: '#61bacf',
      10: '#67b3c6',
      20: '#6dadbd',
      30: '#71a6b4',
      40: '#75a0ab',
      50: '#789aa2',
    },
    secondary: {
      default: '#ffffff',
      10: '#f0f0f0',
      20: '#e1e1e1',
      30: '#d3d3d3',
      40: '#c5c5c5',
      50: '#b6b6b6',
    },
  },
};
