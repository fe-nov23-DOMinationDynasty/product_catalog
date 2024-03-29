/* eslint-disable max-len */
import { useEffect, useMemo, useState } from 'react';
import './HomePage.scss';
import '../../styles/utils/text-styles.scss';
import '../../styles/utils/dark-theme.scss';

import { PromoSlider } from '../../components/PromoSilder';
import { RecommendsSlider } from '../../components/RecommendsSlider';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ShopCategory } from '../../components/ShopCategory';

import { getUnicProducts, sortProducts } from '../../utils/productsHelper';
import { SortOptions } from '../../enums/SortOptions';
import { Promo } from '../../types/Promo';
import { getPromos } from '../../api/promos';
import { wait } from '../../utils/fetchClient';
import { getMockArray } from '../../services/getMockArray';
import { actions as productsActions } from '../../features/productsSlice';
import { requestDelay } from '../../constants/constants';

export const HomePage = () => {
  const [promos, setPromos] = useState<Promo[] | null>(null);
  const theme = useAppSelector(state => state.themeReducer);
  const dispatch = useAppDispatch();

  const { products, isLoading } = useAppSelector(
    (state) => state.productsReducer
  );

  const hotPricesProducts = useMemo(() => {
    const unicProducts = getUnicProducts(products);

    return sortProducts(unicProducts, SortOptions.HotPrices).slice(0, 16);
  }, [products]);

  const newModelsProducts = useMemo(() => {
    if (!products.length) {
      return getMockArray(4);
    }

    const unicProducts = getUnicProducts(products);

    return sortProducts(unicProducts, SortOptions.Newest).slice(0, 16);
  }, [products]);

  useEffect(() => {
    wait(requestDelay)
      .then(() => getPromos())
      .then(setPromos);

    wait(requestDelay)
      .then(() => dispatch(productsActions.loadProducts()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="home-page">
      <h1 className="h1 home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <div className="home-page__content">
        <PromoSlider
          key={theme}
          promos={promos}
        />

        <RecommendsSlider
          title="Brand new models"
          products={newModelsProducts}
        />

        {!isLoading && (
          <>
            <ShopCategory />

            <RecommendsSlider
              title="Hot prices"
              products={hotPricesProducts}
            />
          </>
        )}
      </div>
    </section>
  );
};
