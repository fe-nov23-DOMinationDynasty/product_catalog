import React from 'react';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import '../../styles/utils/text-styles.scss';

import './FavouritesPage.scss';
import { useAppSelector } from '../../app/hooks';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const FavouritesPage: React.FC = () => {
  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);

  return (
    <section className="favourites-page">
      <>
        <div className="favourites-page__wrapper"><BreadCrumbs /></div>
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
