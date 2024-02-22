/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { getProducts } from '../api/products';

const initialState = {
  products: [] as Product[],
  isLoading: true,
  errorMessage: '',
};

const loadProducts = createAsyncThunk(
  'products/fetch',
  () => {
    return getProducts();
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

export const actions = { loadProducts };
