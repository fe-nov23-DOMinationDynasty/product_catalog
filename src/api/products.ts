import { Product } from '../types/Product';
import { request } from '../utils/fetchClient';

export const getProducts = () => {
  return request<Product[]>('products');
};
