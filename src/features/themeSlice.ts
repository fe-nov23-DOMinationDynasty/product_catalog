import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from '../enums/Theme';

const initialState = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches ? Theme.Dark : Theme.Light;


const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_theme, action: PayloadAction<Theme>) => action.payload,
  }
});

export const themeReducer = themeSlice.reducer;

export const actions = { ...themeSlice.actions };
