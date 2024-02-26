import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { App } from '../../App';
import { HomePage } from '../../pages/HomePage/HomePage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import { FavouritesPage } from '../../pages/FavouritesPage/FavouritesPage';
import { ItemCardPage } from '../../pages/ItemCardPage/ItemCardPage';
import { CartPage } from '../../pages/CartPage/CartPage';
import { NotFoundPage } from '../../pages/NotFound';
import { Category } from '../../enums/Category';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="../" replace />} />
      <Route path="catalog">
        {Object.values(Category).map(category => (
          <React.Fragment key={category}>
            <Route path={category} element={<CatalogPage />} />
            <Route path={`${category}/:itemId`} element={<ItemCardPage />} />
          </React.Fragment>
        ))}
      </Route>
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
