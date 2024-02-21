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

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouriteProductIds as number[],
  reducers: {
    add: (productsIds, action: PayloadAction<number>) => {
      const newProductsIds = [...productsIds, action.payload];

      setFavouriteProductIds(newProductsIds);

      return newProductsIds;
    },
    delete: (productsIds, action: PayloadAction<number>) => {
      const newProductsIds = productsIds.filter((id) => id !== action.payload);

      setFavouriteProductIds(newProductsIds);

      return newProductsIds;
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;

export const actions = { ...favouritesSlice.actions };
