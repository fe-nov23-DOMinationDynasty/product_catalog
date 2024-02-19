import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import * as getGoods from '../../api/products';
import { Phone } from '../../types/Phone';
import { CardLayout } from '../../components/CardLayout/CardLayout';

export const CatalogPage = () => {
  const { currentPageNumber } = useParams();
  const [phones, setPhones] = useState<Phone[]>([]);
  const [amountOfPages, setAmountOfPages] = useState(1);

  useEffect(() => {
    getGoods.phones().then(data => {
      setPhones(data);
    });

  }, []);

  useEffect(() => {
    setAmountOfPages( Math.ceil(phones.length / 16));
  }, []);

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
