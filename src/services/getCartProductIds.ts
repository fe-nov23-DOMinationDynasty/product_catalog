import { CartProduct } from '../types/CartProduct';

export const getCartProductId = (product: CartProduct): number => {
  return +Object.keys(product)[0];
};
