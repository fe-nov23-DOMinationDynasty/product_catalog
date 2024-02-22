import { useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { Pagination } from '../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Dropdown } from '../../components/Dropdown';
import { SortOptions } from '../../enums/SortOptions';
import { itemsPerPageOptions } from '../../constants/constants';
import { getSearchWith } from '../../utils/searchHelper';

import './CatalogPage.scss';

export const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = searchParams.get('perPage') || 'all';
  const sortOption = searchParams.get('sortBy') || 'newest';
  const { currentPageNumber, productCategory } = useParams();
  const { products, isLoading, errorMessage } = useAppSelector(
    (state) => state.productsReducer
  );
  const dispatch = useAppDispatch();

  const filteredProducts = useMemo(() => {
    return products.filter(({ category }) => category === productCategory);
  }, [productCategory, products]);

  useEffect(() => {
    dispatch(productsActions.loadProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productCategory]);

  const handleItemsPerPageChanged = (newItemsPerPage: string) => {
    if (newItemsPerPage !== itemsPerPage) {
      const newParams = getSearchWith(searchParams, {
        perPage: newItemsPerPage === 'all' ? null : newItemsPerPage,
      });

      setSearchParams(newParams);
    }
  };

  const handleSortParamsChanged = (newSortOption: string) => {
    const normalizedSortOption = newSortOption.toLowerCase();

    if (normalizedSortOption !== sortOption) {
      const newParams = getSearchWith(searchParams, {
        sortBy: normalizedSortOption,
      });

      setSearchParams(newParams);
    }
  };

  return (
    <div className="catalog-page">
      {isLoading && <Loader />}

      {!isLoading && !errorMessage && (
        <>
          <div className="catalog-page__dropdowns-container">
            <div className="catalog-page__sort-dropdown">
              <span className="catalog-page__dropdown-title">Sort by</span>
              <Dropdown
                onSelected={handleSortParamsChanged}
                options={Object.keys(SortOptions)}
                selectedOption={sortOption}
              />
            </div>

            <div className="catalog-page__items-per-page-dropdown">
              <span className="catalog-page__dropdown-title">
                Items on page
              </span>
              <Dropdown
                onSelected={handleItemsPerPageChanged}
                options={itemsPerPageOptions}
                selectedOption={itemsPerPage}
              />
            </div>
          </div>

          <ProductTable products={filteredProducts} />

          <div className="wrapper">
            <Pagination
              amountOfPages={5}
              currentPageIndex={+(currentPageNumber || 1) - 1}
            />
          </div>
        </>
      )}

      {!isLoading && !!errorMessage && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
    </div>
  );
};
