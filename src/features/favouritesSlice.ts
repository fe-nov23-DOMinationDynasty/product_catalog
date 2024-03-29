/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/getLocalStorage';
import { localStorageFavouritesKey } from '../constants/constants';
import { LocalFavouriteProducts } from '../types/LocalFavouriteProducts';

const [favouriteProducts, setFavouriteProducts] = getLocalStorage(
  localStorageFavouritesKey,
  []
);

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouriteProducts as LocalFavouriteProducts[],
  reducers: {
    add: (products, action) => {
      const newProductsIds = [...products, action.payload];

      setFavouriteProducts(newProductsIds);

      return newProductsIds;
    },
    delete: (productsIds, action: PayloadAction<string>) => {
      const newProductsIds = productsIds.filter(
        ({ itemId }) => itemId !== action.payload
      );

      setFavouriteProducts(newProductsIds);

      return newProductsIds;
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;

export const actions = { ...favouritesSlice.actions };
