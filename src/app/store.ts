import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsReducer } from '../features/productsSlice';
import { favouritesReducer } from '../features/favouritesSlice';
import { cartReducer } from '../features/cartSlice';
import { themeReducer } from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
    favouritesReducer,
    themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
