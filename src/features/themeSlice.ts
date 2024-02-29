import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from '../enums/Theme';
import { localStorageThemeKey } from '../constants/constants';
import { getLocalStorage } from '../services/getLocalStorage';

const [localTheme, setLocalTheme] = getLocalStorage(
  localStorageThemeKey,
  ''
);

const initialState = localTheme || (window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches
  ? Theme.Dark
  : Theme.Light);

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_theme, action: PayloadAction<Theme>) => {
      setLocalTheme(action.payload);

      return action.payload;
    },
  }
});

export const themeReducer = themeSlice.reducer;

export const actions = { ...themeSlice.actions };
