import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadProducts } from '../../features/productsSlice';
import { Category } from '../../enums/Category';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import { Loader } from '../../components/Loader';

export const CatalogPage = () => {
  const { currentPageNumber, productType } = useParams();
  const { products, isLoading } = useAppSelector(
    (state) => state.productsReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts(productType as Category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productType]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
    </>
  );
};
