import { Product } from '../enums/Product';
import { Phone } from '../types/Phone';
import { request } from '../utils/fetchClient';

export const accessries = () => {
  return request(Product.Accessories);
};

export const phones = () => {
  return request<Phone[]>(Product.Phones);
};

export const tablets = () => {
  return request(Product.Tablets);
};

export const products = () => {
  return request(Product.Products);
};
