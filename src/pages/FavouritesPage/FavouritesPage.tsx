import React from 'react';
import { ProductTable } from '../../components/ProductTable/ProductTable';

import './favourites.scss';
import { useAppSelector } from '../../app/hooks';

export const FavouritesPage: React.FC = () => {
  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);

  return (
    <section className="favourites-page">
      <>
        <div className="favourites-page__wrapper">Breadcrumps</div>
        <h1 className="favourites-page__favourites h1">Favourites</h1>
        <span className="favourites-page__info">
          {favouriteProducts.length} items
        </span>
        <div className="favourites-page__items-container">
          <ProductTable products={favouriteProducts} />
        </div>
      </>
    </section>
  );
};
