import { SortOptions } from '../enums/SortOptions';
import { FilterOptions } from '../types/FilterOptions';
import { PaginationParams } from '../types/PaginationParams';
import { Product } from '../types/Product';

export const paginateProducts = (
  items: Product[],
  { currentPage, perPage }: PaginationParams
) => {
  if (!perPage) {
    return items;
  }

  return items.slice((currentPage - 1) * perPage, currentPage * perPage);
};

export const getUnicProducts = (products: Product[]) => {
  const unicProducts: Product[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const product of products) {
    const itemId = product.itemId
      .replace(product.color, '')
      .split('-')
      .slice(0, -2)
      .join('-');

    if (unicProducts.every(currentProduct =>
      !currentProduct.itemId.includes(itemId))
    ) {
      unicProducts.push(product);
    }
  }

  return unicProducts;
};

export const filterProducts = (products: Product[], options: FilterOptions) => {
  if (!options.query) {
    return [...products];
  }

  return products
    .filter(product => product.name.toLowerCase().includes(options.query));
};

export const sortProducts = (products: Product[], sortOption: SortOptions) => {
  const productsCopy = [...products];

  return productsCopy.sort((product1, product2) => {
    switch (sortOption) {
      case SortOptions.Cheapest: {
        return +product1[sortOption] - +product2[sortOption];
      }

      case SortOptions.Newest: {
        return +product2[sortOption] - +product1[sortOption];
      }

      case SortOptions.Alphabetically: {
        return (product1[sortOption] as string).localeCompare(
          product2[sortOption] as string
        );
      }

      case SortOptions.HotPrices: {
        const product1Discount = product1.fullPrice - product1.price;
        const product2Discount = product2.fullPrice - product2.price;

        return product2Discount - product1Discount;
      }

      default: {
        return 0;
      }
    }
  });
};

export function prepareProducts(
  products: Product[],
  sortOption: SortOptions,
  paginationOptions: PaginationParams
): Product[] {
  const sortedProducts = sortProducts(products, sortOption);

  return paginateProducts(sortedProducts, paginationOptions);
}
