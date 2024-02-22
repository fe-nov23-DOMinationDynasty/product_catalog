import { SortOptions } from "../enums/SortOptions";
import { PaginationParams } from "../types/PaginationParams";
import { Product } from "../types/Product";

const paginateProducts = (
  items: Product[],
  { currentPage, perPage }: PaginationParams,
) => {
  if (!perPage) {
    return items;
  }

  return items.slice((currentPage - 1) * perPage, currentPage * perPage);
};

const sortProducts = (products: Product[], sortOption: SortOptions) => {
  return products.sort((product1, product2) => {
    switch (sortOption) {
      case SortOptions.Cheapest: {
        return +product1[sortOption] - +product2[sortOption];
      }

      case SortOptions.Newest: {
        return +product2[sortOption] - +product1[sortOption];
      }

      case SortOptions.Alphabetically: {
        return (product1[sortOption] as string)
          .localeCompare(product2[sortOption] as string);
      }

      default: {
        return 0;
      }
    }
  });
};

export function prepareProducts(
  products: Product[],
  paginationParams: PaginationParams,
  sortOption: SortOptions,
): Product[] {
  const paginatedProducts = paginateProducts(products, paginationParams);

  if (sortOption) {
    return sortProducts(paginatedProducts, sortOption);
  }

  return paginatedProducts;
}
