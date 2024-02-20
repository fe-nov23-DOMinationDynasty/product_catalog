import { useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';

export const CatalogPage = () => {
  const { currentPageNumber } = useParams();

  return (
    <>
      {/* <ProductTable products={phones} /> */}

      <div className="wrapper">
        <Pagination
          amountOfPages={5}
          currentPageIndex={+(currentPageNumber as string) - 1}
        />
      </div>
    </>
  );
};
