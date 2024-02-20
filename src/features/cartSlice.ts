/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { localStorageCartKey } from '../constants/constants';
import { getLocalStorage } from '../services/getLocalStorage';

const [cartProductIds, setCartProductIds] = getLocalStorage(
  localStorageCartKey,
  []
);

const initialState = {
  cartProductIds: cartProductIds as number[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.cartProductIds = [...state.cartProductIds, action.payload];

      setCartProductIds(state.cartProductIds);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cartProductIds = state.cartProductIds.filter(
        (id) => id !== action.payload
      );

      setCartProductIds(state.cartProductIds);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, deleteFromCart } = cartSlice.actions;
