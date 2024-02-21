/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { localStorageCartKey } from '../constants/constants';
import { getLocalStorage } from '../services/getLocalStorage';
import { CartProduct } from '../types/CartProduct';
import { getCartProductId } from '../services/getCartProductIds';

const [cartProducts, setCartProducts] = getLocalStorage(
  localStorageCartKey,
  []
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartProducts as CartProduct[],
  reducers: {
    add: (products, action: PayloadAction<number>) => {
      const newProducts = [...products, { [action.payload]: 1 }];

      setCartProducts(newProducts);

      return newProducts;
    },
    delete: (products, action: PayloadAction<number>) => {
      const newProducts = products.filter(
        (product) => getCartProductId(product) !== action.payload
      );

      setCartProducts(newProducts);

      return newProducts;
    },
    incrementAmount: (products, action: PayloadAction<number>) => {
      const productIndex = products.findIndex(
        (product) => getCartProductId(product) === action.payload
      );

      products[productIndex][action.payload] += 1;
      // products[productIndex] - get product from array
      // products[productIndex][action.payload] - get property by key(productId)
    },
    decrementAmount: (products, action: PayloadAction<number>) => {
      const productIndex = products.findIndex(
        (product) => getCartProductId(product) === action.payload
      );

      products[productIndex][action.payload] -= 1;
      // products[productIndex] - get product from array
      // products[productIndex][action.payload] - get property by key(productId)
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const actions = { ...cartSlice.actions };
