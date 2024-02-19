import { useParams } from 'react-router-dom';
// import { Pagination } from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';

export const CatalogPage = () => {
  // const { currentPageNumber } = useParams();

  return (
    <>
      <div className="wrapper">
        <ProductCard />

        {/* <Pagination
          amountOfPages={5}
          currentPageIndex={+(currentPageNumber as string) - 1}
        /> */}
      </div>
    </>
  );
};
