/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/getLocalStorage';
import { Product } from '../types/Product';
import { localStorageFavouritesKey } from '../constants/constants';

const [favouriteProducts, setFavouriteProducts] = getLocalStorage(
  localStorageFavouritesKey,
  []
);

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: favouriteProducts as Product[],
  reducers: {
    add: (products, action: PayloadAction<Product>) => {
      const newProductsIds = [...products, action.payload];

      setFavouriteProducts(newProductsIds);

      return newProductsIds;
    },
    delete: (productsIds, action: PayloadAction<number>) => {
      const newProductsIds = productsIds.filter(
        ({ id }) => id !== action.payload
      );

      setFavouriteProducts(newProductsIds);

      return newProductsIds;
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;

export const actions = { ...favouritesSlice.actions };
