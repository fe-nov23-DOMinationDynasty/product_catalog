/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services/getLocalStorage';
import { CartItem, CartProduct } from '../types/CartItem';
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
    add: (state, action: PayloadAction<CartProduct>) => {
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
    delete: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        ({ product }) => product.itemId !== action.payload
      );

      state.totalAmount -= 1;

      setLocalCartItems(state.cartItems);
    },
    incrementAmount: (state, action: PayloadAction<string>) => {
      const productIndex = state.cartItems.findIndex(
        ({ product }) => product.itemId === action.payload
      );

      state.totalAmount += 1;

      state.cartItems[productIndex].amount += 1;

      setLocalCartItems(state.cartItems);
    },
    decrementAmount: (state, action: PayloadAction<string>) => {
      const productIndex = state.cartItems.findIndex(
        ({ product }) => product.itemId === action.payload
      );

      state.totalAmount -= 1;

      state.cartItems[productIndex].amount -= 1;

      setLocalCartItems(state.cartItems);
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
