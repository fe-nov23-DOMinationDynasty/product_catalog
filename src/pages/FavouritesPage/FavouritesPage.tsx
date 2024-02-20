import {useState} from 'react';
import { Favourites } from '../../components/Favourites';
import { Product } from '../../types/Product';
import { getProducts } from '../../api/products';

export const FavouritesPage = () => {
  const [favProducts, setFavProducts] = useState<Product[]>([]);

  getProducts()
    .then((res) => setFavProducts(res))
    .catch(() => 'smth went wrong');

  return (
    <Favourites products={favProducts}/>
  );
};
