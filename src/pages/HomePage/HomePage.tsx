/* eslint-disable max-len */
import { useMemo } from 'react';
import './HomePage.scss';
import '../../styles/utils/text-styles.scss';
import '../../styles/utils/dark-theme.scss';

import { PromoSlider } from '../../components/PromoSilder';
import { useResize } from '../../hooks/useResize';
import { RecommendsSlider } from '../../components/RecommendsSlider';
import { useAppSelector } from '../../app/hooks';
import { ShopCategory } from '../../components/ShopCategory';

import { tabletWidth } from '../../constants/constants';
import { getUnicProducts, sortProducts } from '../../utils/productsHelper';
import { SortOptions } from '../../enums/SortOptions';
import {
  promosMobile,
  promosTabletAndDesktop
} from '../../components/PromoSilder/promoSliderUtils';

export const HomePage = () => {
  const [windowWidth] = useResize();

  const { products, isLoading } = useAppSelector(
    (state) => state.productsReducer
  );

  const hotPricesProducts = useMemo(() => {
    const unicProducts = getUnicProducts(products);

    return sortProducts(unicProducts, SortOptions.HotPrices).slice(0, 16);
  }, [products]);

  const newModelsProducts = useMemo(() => {
    const unicProducts = getUnicProducts(products);

    return sortProducts(unicProducts, SortOptions.Newest).slice(0, 16);
  }, [products]);

  return (
    <section className="home-page">
      {!isLoading && (
        <>
          <h1 className="h1 home-page__title">
            Welcome to Nice Gadgets store!
          </h1>

          <div className="home-page__content">
            <PromoSlider
              promos={
                windowWidth >= tabletWidth
                  ? promosTabletAndDesktop
                  : promosMobile
              }
            />

            <RecommendsSlider
              title="Brand new models"
              products={newModelsProducts}
            />

            <ShopCategory />

            <RecommendsSlider
              title="Hot prices"
              products={hotPricesProducts}
            />
          </div>
        </>
      )}
    </section>
  );
};
