import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { Phone } from '../../types/Phone';
import { ProductTable } from '../../components/CardLayout/ProductTable';
import { getPhones } from '../../api/products';

export const CatalogPage = () => {
  const { currentPageNumber } = useParams();
  const [phones, setPhones] = useState<Phone[]>([]);


  useEffect(() => {
    getPhones().then(data => {
      setPhones(data);
    });

  }, []);

  return (
    <>
      <ProductTable phones={phones} />
      <div className="wrapper">
        <Pagination
          amountOfPages={16}
          currentPageIndex={+(currentPageNumber as string) - 1}
        />
      </div>
    </>
  );
};
