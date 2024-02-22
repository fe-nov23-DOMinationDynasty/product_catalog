import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';

export const CatalogPage = () => {
  const { currentPageNumber, productType } = useParams();
  const { products, isLoading, errorMessage } = useAppSelector(
    (state) => state.productsReducer
  );
  const dispatch = useAppDispatch();

  const filteredProducts = useMemo(() => {
    return products.filter(({ category }) => category === productType);
  }, [productType, products]);

  useEffect(() => {
    dispatch(productsActions.loadProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productType]);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && !errorMessage && (
        <>
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
    </>
  );
};
