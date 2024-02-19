import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { Phone } from '../../types/Phone';
import { CardLayout } from '../../components/CardLayout/CardLayout';
import { getPhones } from '../../api/products';

export const CatalogPage = () => {
  const { currentPageNumber } = useParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [amountOfPages, setAmountOfPages] = useState(1);
  const [itemPerPage] = useState(16);

  useEffect(() => {
    getPhones().then(data => {
      setPhones(data);
    });

  }, []);

  useEffect(() => {
    setAmountOfPages( Math.ceil(phones.length / itemPerPage));
  }, [phones]);

  return (
    <>
      <CardLayout phones={phones} />
      <div className="wrapper">
        <Pagination
          amountOfPages={amountOfPages}
          currentPageIndex={+(currentPageNumber as string) - 1}
        />
      </div>
    </>
  );
};
