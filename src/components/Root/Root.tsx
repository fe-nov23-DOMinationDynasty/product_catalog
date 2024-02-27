import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { App } from '../../App';
import { NotFoundPage } from '../../pages/NotFound';
import { Category } from '../../enums/Category';
import { HomePage } from '../../pages/HomePage';
import { CatalogPage } from '../../pages/CatalogPage';
import { ItemCardPage } from '../../pages/ItemCardPage';
import { FavouritesPage } from '../../pages/FavouritesPage';
import { CartPage } from '../../pages/CartPage';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="../" replace />} />
      {Object.values(Category).map(category => (
        <React.Fragment key={category}>
          <Route path={category} element={<CatalogPage />} />
          <Route path={`${category}/:itemId`} element={<ItemCardPage />} />
        </React.Fragment>
      ))}
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
