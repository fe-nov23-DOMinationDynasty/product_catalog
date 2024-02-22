import { useState } from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/products';
import { ProductTable } from '../../components/ProductTable/ProductTable';

import './favourites.scss';

export const FavouritesPage = () => {
  const [favProducts, setFavProducts] = useState<Product[]>([]);

  getProducts()
    .then((res) => setFavProducts(res))
    .catch(() => 'smth went wrong');

  return (
    <section className="favourites-page">
      <div className="favourites-page__wrapper">Breadcrumps</div>
      <h1 className="favourites-page__favourites h1">Favourites</h1>
      <span className="favourites-page__info">5 items</span>
      <ProductTable products={favProducts} />
    </section>
  );
};
