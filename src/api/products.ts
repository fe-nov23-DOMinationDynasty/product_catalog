import { Product } from '../enums/Product';
import { Phone } from '../types/Phone';
import { request } from '../utils/fetchClient';

export const getAccessories = () => {
  return request(Product.Accessories);
};

export const getPhones = () => {
  return request<Phone[]>(Product.Phones);
};

export const getTablets = () => {
  return request(Product.Tablets);
};

export const getProducts = () => {
  return request(Product.Products);
};
