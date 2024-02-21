/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { localStorageCartKey } from '../constants/constants';
import { getLocalStorage } from '../services/getLocalStorage';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

const [cartProducts, setCartProducts] = getLocalStorage(
  localStorageCartKey,
  []
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartProducts as CartItem[],
  reducers: {
    add: (cartItems, action: PayloadAction<Product>) => {
      const newProducts = [
        ...cartItems,
        {
          product: action.payload,
          amount: 1,
        },
      ];

      setCartProducts(newProducts);

      return newProducts;
    },
    delete: (cartItems, action: PayloadAction<number>) => {
      const newProducts = cartItems.filter(
        ({ product }) => product.id !== action.payload
      );

      setCartProducts(newProducts);

      return newProducts;
    },
    incrementAmount: (cartItems, action: PayloadAction<number>) => {
      const productIndex = cartItems.findIndex(
        ({ product }) => product.id === action.payload
      );

      cartItems[productIndex].amount += 1;
    },
    decrementAmount: (cartItems, action: PayloadAction<number>) => {
      const productIndex = cartItems.findIndex(
        ({ product }) => product.id === action.payload
      );

      cartItems[productIndex].amount -= 1;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const actions = { ...cartSlice.actions };
