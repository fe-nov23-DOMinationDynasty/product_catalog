import { Product } from '../enums/Product';
import { request } from '../utils/fetchClient';

export const getAccessries = () => {
  return request(Product.Accessories);
};

export const getPhones = () => {
  return request(Product.Phones);
};

export const getTablets = () => {
  return request(Product.Tablets);
};

export const getProducts = () => {
  return request(Product.Products);
};
