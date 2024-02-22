/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/getLocalStorage';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { localStorageCartKey } from '../constants/constants';

const [localCartItems, setLocalCartItems] = getLocalStorage(
  localStorageCartKey,
  []
);

const getTotalAmount = (cartItems: CartItem[]) => {
  return cartItems.reduce((totalAmount, { amount }) => totalAmount + amount, 0);
};

const initialState = {
  cartItems: localCartItems as CartItem[],
  totalAmount: getTotalAmount(localCartItems),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.cartItems = [
        ...state.cartItems,
        {
          product: action.payload,
          amount: 1,
        },
      ];

      state.totalAmount += 1;

      setLocalCartItems(state.cartItems);
    },
    delete: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        ({ product }) => product.id !== action.payload
      );

      state.totalAmount -= 1;

      setLocalCartItems(state.cartItems);
    },
    incrementAmount: (state, action: PayloadAction<number>) => {
      const productIndex = state.cartItems.findIndex(
        ({ product }) => product.id === action.payload
      );

      state.totalAmount += 1;

      state.cartItems[productIndex].amount += 1;
    },
    decrementAmount: (state, action: PayloadAction<number>) => {
      const productIndex = state.cartItems.findIndex(
        ({ product }) => product.id === action.payload
      );

      state.totalAmount -= 1;

      state.cartItems[productIndex].amount -= 1;
    },
    resetCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;

      setLocalCartItems([]);

      return state;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const actions = { ...cartSlice.actions };
