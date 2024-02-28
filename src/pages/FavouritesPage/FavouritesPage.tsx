import React from 'react';
import { ProductTable } from '../../components/ProductTable/ProductTable';
import '../../styles/utils/text-styles.scss';

import './FavouritesPage.scss';
import { useAppSelector } from '../../app/hooks';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { NoItemsMessage } from '../../components/NoItemsMessage';

export const FavouritesPage: React.FC = () => {
  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);

  return (
    <section className="favourites-page">
      <div className="favourites-page__bread-crumbs-wrapper">
        <BreadCrumbs />
      </div>
      <h1 className="favourites-page__title h1">Favourites</h1>
      {favouriteProducts.length
        ? (
          <>
            <span className="favourites-page__items-amount">
              {favouriteProducts.length} items
            </span>
            <div className="favourites-page__items-container">
              <ProductTable products={favouriteProducts} />
            </div>
          </>
        )
        : (
          <NoItemsMessage
            message="No favourites yet"
            image='./img/no-favourites.webp'
          />
        )
      }
    </section>
  );
};
