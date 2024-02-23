import { Category } from '../enums/Category';
import { Accessory } from '../types/Accessory';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';
import { Tablet } from '../types/Tablet';
import { request } from '../utils/fetchClient';

export const getProducts = () => {
  return request<Product[]>('products');
};

export const getProductInfo = (category: Category, itemId: string) => {
  return request<Phone[] | Accessory[] | Tablet[]>(category).then(
    (products) => products.find((product) => product.id === itemId) || null
  );
};

export const getSpecifiedProduct = (
  category: Category,
  namespaceId: string,
  capacity: string,
  color: string,
) => {
  return request<Phone[] | Accessory[] | Tablet[]>(category).then(
    (products) => products.find(
      (product) => product.namespaceId === namespaceId
        && product.capacity === capacity
        && product.color === color) || null
  );
};
