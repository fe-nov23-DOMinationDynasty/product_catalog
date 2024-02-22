import { SortOptions } from "../enums/SortOptions";
import { PaginationParams } from "../types/PaginationParams";
import { Product } from "../types/Product";

const paginateProducts = (
  items: Product[],
  { currentPage, perPage }: PaginationParams,
) => {
  return items.slice(currentPage - 1 * perPage, currentPage * perPage);
};

const sortProducts = (products: Product[], sortOption: SortOptions) => {
  return products.sort((product1, product2) => {
    switch (typeof product1[sortOption]) {
      case 'number': {
        return +product1[sortOption] - +product2[sortOption];
      }

      case 'string': {
        return (product1[sortOption] as string)
          .localeCompare(product2[sortOption] as string);
      }

      default: {
        return 0;
      }
    }
  });
};

export function preparePeople(
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
