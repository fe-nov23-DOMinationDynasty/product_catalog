import { useEffect } from 'react';
import './home-page.scss';
import '../../styles/utils/text-styles.scss';
import { PromoSlider } from '../../components/PromoSilder';
import { useResize } from '../../hooks/useResize';
import { RecommendsSlider } from '../../components/RecommendsSlider';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';
import { ShopCategory } from '../../components/ShopCategory';
import { promosMobile, promosTabletAndDesktop } from '../../utils/promosHelper';
import { tabletWidth } from '../../constants/constants';

export const HomePage = () => {
  const [windowWidth] = useResize();
  const dispatch = useAppDispatch();

  const {
    products,
    isLoading,
  } = useAppSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(productsActions.loadProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newProducts = products.filter(product => product.year === 2022);

  return (
    <section className="home-page">
      {!isLoading && (
        <>
          <h1 className="h1 home-page__title">
            Welcome to Nice Gadgets store!
          </h1>

          <PromoSlider
            promos={
              windowWidth >= tabletWidth ? promosTabletAndDesktop : promosMobile
            }
          />

          <RecommendsSlider title="Brand new models" products={newProducts} />

          <ShopCategory />
        </>
      )}
    </section>
  );
};
