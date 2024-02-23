/* eslint-disable max-len */
import { Product } from './Product';

export type CartProduct = Pick<Product, 'name' | 'price' | 'image' | 'itemId'>;

export interface CartItem {
  product: CartProduct;
  amount: number;
}
