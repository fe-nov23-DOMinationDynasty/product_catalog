import React from 'react';
import  './favourites.scss';
import { Product } from '../../types/Product';
import { ProductTable } from '../ProductTable/ProductTable';
import '../../styles/utils/text-styles.scss';

interface Props {
  products:Product[];
}

export const Favourites: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="wrapper">
        <h1 className="favourites__title h1">Favourites</h1>
        <span className="favourites__info">5 items</span>
      </div>

      <ProductTable products={products} />
    </>
  );
};
