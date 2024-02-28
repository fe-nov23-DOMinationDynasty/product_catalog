/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import debounce from 'lodash.debounce';
import { Pagination } from '../../components/Pagination';
import { useAppSelector } from '../../app/hooks';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Dropdown } from '../../components/Dropdown';
import { SortOptions } from '../../enums/SortOptions';
import { getSearchWith } from '../../utils/searchHelper';

import './CatalogPage.scss';
import '../../styles/blocks/button.scss';
import { paginateProducts, prepareProducts } from '../../utils/productsHelper';
import { debounceDelay, itemsPerPageOptions } from '../../constants/constants';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { capitalizeFirstLetter } from '../../services/capitalizeFirstLetter';
import { FilterOptions } from '../../types/FilterOptions';

export const CatalogPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = searchParams.get('perPage') || 'all';
  const sortOption = searchParams.get('sortBy') || '';
  const currentPageNumber = searchParams.get('page') || 1;
  const query = searchParams.get('query') || '';
  const productCategory = location.pathname.split('/').at(-1);
  const { products, isLoading, errorMessage } = useAppSelector(
    (state) => state.productsReducer
  );
  const dropdownsRef = useRef<HTMLDivElement>(null);
  const [inputQuery, setInputQuery] = useState(query);
  const updateQuery = useCallback(debounce((newParams: string) => {

    if (newParams !== searchParams.toString()) {
      setSearchParams(newParams);
    }
  }, debounceDelay), [searchParams]);

  const categoryProducts = useMemo(() => {
    return products.filter(({ category }) => category === productCategory);
  }, [productCategory, products]);

  const preparedProducts = useMemo(() => {
    return prepareProducts(
      categoryProducts,
      sortOption as SortOptions,
      { query } as FilterOptions
    );
  }, [categoryProducts, sortOption, itemsPerPage, currentPageNumber, query]);

  const paginatedProducts = useMemo(() => (
    paginateProducts(
      preparedProducts,
      {
        perPage: +itemsPerPage || null,
        currentPage: +currentPageNumber! || 1
      })
  ), [itemsPerPage, currentPageNumber, preparedProducts]);

  const amountOfPages = Math.ceil(preparedProducts.length / +itemsPerPage);

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

  const handleQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedQuery = event.target.value.toLowerCase().trim();

    updateQuery(
      getSearchWith(searchParams, { 'query': normalizedQuery || null })
    );

    setInputQuery(event.target.value);
  };

  useEffect(() => {
    if (currentPageNumber !== 1) {
      dropdownsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPageNumber]);

  useEffect(() => {
    setInputQuery(query);
  }, [productCategory]);

  return (
    <div className="catalog-page">
      {isLoading && <Loader />}

      {!isLoading && !errorMessage && (
        <>
          <div className="catalog-page__breadcrumbs-container">
            <BreadCrumbs />
          </div>

          <div className="catalog-page__header">
            <h1 className="catalog-page__title h1">
              {capitalizeFirstLetter(
                productCategory === 'phones'
                  ? 'Mobile phones'
                  : productCategory!
              )}
            </h1>
            <p className="catalog-page__amount-products">
              {categoryProducts.length} models
            </p>
          </div>

          <div className="catalog-page__wrap">
            <div className="catalog-page__dropdowns-container">
              <div className="catalog-page__sort-dropdown" ref={dropdownsRef}>
                <span className="catalog-page__dropdown-title small-text">
                  Sort by
                </span>
                <Dropdown
                  onSelected={handleSortParamsChanged}
                  options={Object.keys(SortOptions)
                    .filter(item => item !== 'HotPrices')}
                  selectedOption={getSelectedSortOption(sortOption)}
                />
              </div>
              <div className="catalog-page__items-per-page-dropdown">
                <span className="catalog-page__dropdown-title small-text">
                  Items on page
                </span>
                <Dropdown
                  onSelected={handleItemsPerPageChanged}
                  options={itemsPerPageOptions}
                  selectedOption={itemsPerPage}
                />
              </div>
            </div>

            <div className="catalog-page__search-wrapper">
              <span className="catalog-page__search-title small-text">
                Search
              </span>
              <input
                value={inputQuery}
                onChange={handleQueryChanged}
                placeholder={`Search in ${productCategory}`}
                type="search"
                className='catalog-page__search'
              />
            </div>

            <div className="catalog-page__products">
              <ProductTable products={paginatedProducts} />
            </div>
          </div>

          {amountOfPages > 1 && (
            <div className="catalog-page__pagination wrapper">
              <Pagination
                amountOfPages={amountOfPages}
                currentPageNumber={+currentPageNumber}
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
