/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { localStorageFavouritesKey } from '../constants/constants';
import { getLocalStorage } from '../services/getLocalStorage';

const [favouriteProductIds, setFavouriteProductIds] = getLocalStorage(
  localStorageFavouritesKey,
  []
);

const initialState = {
  favouriteProductIds: favouriteProductIds as number[],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<number>) => {
      state.favouriteProductIds = [
        ...state.favouriteProductIds,
        action.payload,
      ];

      setFavouriteProductIds(state.favouriteProductIds);
    },
    deleteFromFavourites: (state, action: PayloadAction<number>) => {
      state.favouriteProductIds = state.favouriteProductIds.filter(
        (id) => id !== action.payload
      );

      setFavouriteProductIds(state.favouriteProductIds);
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;

export const { addToFavourites, deleteFromFavourites } =
  favouritesSlice.actions;
