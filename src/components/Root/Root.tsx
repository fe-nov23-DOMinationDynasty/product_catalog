import { App } from '../../App';
import { HomePage } from '../../pages/HomePage';
import { CatalogPage } from '../../pages/CatalogPage';
import { FavouritesPage } from '../../pages/FavouritesPage';
import { ItemCardPage } from '../../pages/ItemCardPage';
import { CartPage } from '../../pages/CartPage';
import { PageNotFound } from '../../pages/PageNotFound';
import { Navigate, Route, Routes } from 'react-router-dom';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="../" />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="items">
        <Route path=":item-slug" element={<ItemCardPage />} />
      </Route>
      <Route path="cart" element={<CartPage />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
