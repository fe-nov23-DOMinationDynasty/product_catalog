import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../../App';
import { HomePage } from '../../pages/HomePage/HomePage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import { FavouritesPage } from '../../pages/FavouritesPage/FavouritesPage';
import { ItemCardPage } from '../../pages/ItemCardPage/ItemCardPage';
import { CartPage } from '../../pages/CartPage/CartPage';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="../" replace />} />
      <Route path="catalog">
        <Route path=":productCategory">
          <Route index element={<CatalogPage />} />
          <Route path=":itemId" element={<ItemCardPage />} />
        </Route>
      </Route>
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="cart" element={<CartPage />} />
    </Route>
  </Routes>
);
