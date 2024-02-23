import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

const selectedProductSlice = createSlice({
  name: 'favourites',
  initialState: null as null | Product,
  reducers: {
    setProduct: (_product, action: PayloadAction<Product>) => action.payload,
  },
});

export const selectedProductReducer = selectedProductSlice.reducer;

export const actions = { ...selectedProductSlice.actions };
