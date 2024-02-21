/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';
import { Category } from '../../enums/Category';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const CatalogPage = () => {
  const { currentPageNumber, productType } = useParams();
  const { products, isLoading, errorMessage } = useAppSelector(
    (state) => state.productsReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsActions.loadProducts(productType as Category));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productType]);

  return (
    <>
      <BreadCrumbs />
      {isLoading && <Loader />}

      {!isLoading && !errorMessage && (
        <>
          <ProductTable products={products} />

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
    </>
  );
};
