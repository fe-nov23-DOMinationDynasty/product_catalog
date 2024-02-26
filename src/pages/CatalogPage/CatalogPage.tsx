/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Pagination } from '../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Dropdown } from '../../components/Dropdown';
import { SortOptions } from '../../enums/SortOptions';
import { getSearchWith } from '../../utils/searchHelper';

import './CatalogPage.scss';
import '../../styles/blocks/button.scss';
import { prepareProducts } from '../../utils/productsHelper';
import { itemsPerPageOptions } from '../../constants/constants';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const CatalogPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = searchParams.get('perPage') || 'all';
  const sortOption = searchParams.get('sortBy') || '';
  const currentPageNumber = searchParams.get('page') || 1;
  const productCategory = location.pathname.split('/').at(-1);
  const { products, isLoading, errorMessage } = useAppSelector(
    (state) => state.productsReducer
  );
  const dispatch = useAppDispatch();

  const categoryProducts = useMemo(() => {
    return products.filter(({ category }) => category === productCategory);
  }, [productCategory, products]);

  const preparedProducts = useMemo(() => {
    return prepareProducts(
      categoryProducts,
      { perPage: +itemsPerPage || null, currentPage: +currentPageNumber! || 1 },
      sortOption as SortOptions
    );
  }, [categoryProducts, sortOption, itemsPerPage, currentPageNumber]);

  const amountOfPages = Math.floor(categoryProducts.length / +itemsPerPage);

  useEffect(() => {
    dispatch(productsActions.loadProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productCategory]);

  const handleItemsPerPageChanged = (newItemsPerPage: string) => {
    if (newItemsPerPage !== itemsPerPage) {
      const newParams = getSearchWith(searchParams, {
        perPage: newItemsPerPage === 'all' ? null : newItemsPerPage,
        page: null,
      });

      setSearchParams(newParams);
    }
  };

  const handleSortParamsChanged = (newSortOption: string) => {
    const normalizedSortOption
      = SortOptions[newSortOption as keyof typeof SortOptions];

    if (normalizedSortOption !== sortOption) {
      const newParams = getSearchWith(searchParams, {
        sortBy: normalizedSortOption,
      });

      setSearchParams(newParams);
    }
  };

  const getSelectedSortOption = (option: string) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(SortOptions)) {
      if (SortOptions[key as keyof typeof SortOptions] === option) {
        return key;
      }
    }

    return '';
  };

  return (
    <div className="catalog-page">
      {isLoading && <Loader />}

      {!isLoading && !errorMessage && (
        <>
          <div className="catalog-page__breadcrumbs-container">
            <BreadCrumbs />
          </div>

          <div className="catalog-page__header">
            <h1 className="catalog-page__title h1">{productCategory}</h1>
            <p className="catalog-page__amount-products">
              {categoryProducts.length} models
            </p>
          </div>

          <div className="catalog-page__wrap">
            <div className="catalog-page__dropdowns-container">
              <div className="catalog-page__sort-dropdown">
                <span className="catalog-page__dropdown-title">Sort by</span>
                <Dropdown
                  onSelected={handleSortParamsChanged}
                  options={Object.keys(SortOptions)}
                  selectedOption={getSelectedSortOption(sortOption)}
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

            <div className="catalog-page__products">
              <ProductTable products={preparedProducts} />
            </div>
          </div>

          {amountOfPages > 1 && (
            <div className="catalog-page__pagination wrapper">
              <Pagination
                amountOfPages={amountOfPages}
                currentPageIndex={+(currentPageNumber || 1) - 1}
              />
            </div>
          )}
        </>
      )}

      {!isLoading && !!errorMessage && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
    </div>
  );
};
