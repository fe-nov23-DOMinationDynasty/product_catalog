/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { Category } from '../enums/Category';
import { getProducts } from '../api/products';

const initialState = {
  products: [] as Product[],
  isLoading: false,
  errorMessage: '',
};

export const loadProducts = createAsyncThunk(
  'products/fetch',
  (category: Category) => {
    return getProducts().then((products) => {
      return products.filter((product) => product.category === category);
    });
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loadProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loadProducts.rejected, (state) => {
      state.isLoading = false;
      state.errorMessage = 'Unable to load products';
    });

    builder.addCase(
      loadProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.products = action.payload;
      }
    );
  },
});

export const productsReducer = productsSlice.reducer;
