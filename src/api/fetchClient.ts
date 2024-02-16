import { Product } from "../types/product";


function getItem(product: Product) {
  return fetch(`././api/${product}.json`)
  .then(res => res.json())
  .then(data => {
    return data;
  });
}

export const getAccessries = () => {
  return getItem(Product.Accessories);
}
export const getPhones = () => {
  return getItem(Product.Phones);
}
export const getTablets = () => {
  return getItem(Product.Tablets);
}
export const getProducts = () => {
  return getItem(Product.Products);
}
