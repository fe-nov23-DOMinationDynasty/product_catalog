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
      <Route path="home" element={<Navigate to="../" />} />
      <Route path=":productType">
        <Route path="catalog">
          <Route path="page">
            <Route path=":currentPageNumber" element={<CatalogPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="item">
        <Route path=":itemId" element={<ItemCardPage />} />
      </Route>
      <Route path="cart" element={<CartPage />} />
    </Route>
  </Routes>
);
