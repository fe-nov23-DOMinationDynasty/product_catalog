import { useEffect } from 'react';
import { Promo } from '../../types/Promo';
import './home-page.scss';
import { PromoSlider } from '../../components/PromoSilder';
import { tabletWidth } from '../../constants/constants';
import { useResize } from '../../hooks/useResize';
// import { ShopCategory } from '../../components/ShopCategory';
import { RecommendsSlider } from '../../components/RecommendsSlider';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as productsActions } from '../../features/productsSlice';


const promoImagesMobile = [
  './promos/promo-image-mobile.webp',
  './promos/banner-phones.png',
  './promos/banner-tablets.png',
  './promos/banner-accessories.png',
];
const promoImagesTabletAndDesktop = [
  './promos/promo-image-tablet-desktop.webp',
  './promos/banner-phones.png',
  './promos/banner-tablets.png',
  './promos/banner-accessories.png',
];

const promosTabletAndDesktop: Promo[] = promoImagesTabletAndDesktop.map(
  (image, index) => {
    if (index === 0) {
      return {
        image,
        link: 'https://www.apple.com',
      };
    }

    return {
      image,
      link: image.replace('promos/banner-', 'catalog/').replace('.png', ''),
    };
  }
);

const promosMobile: Promo[] = promoImagesMobile.map((image, index) => {
  if (index === 0) {
    return {
      image,
      link: 'https://www.apple.com',
    };
  }

  return {
    image,
    link: image.replace('promos/banner-', 'catalog/').replace('.png', ''),
  };
});

export const HomePage = () => {
  const [windowWidth] = useResize();
  const dispatch = useAppDispatch();

  const { products } = useAppSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(productsActions.loadProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newProducts = products.filter(product => product.year === 2022);

  return (
    <section className="home-page">
      {/* <h1 className="h1">Welcome to Nice Gadgets store!</h1> */}

      <PromoSlider
        promos={
          windowWidth >= tabletWidth ? promosTabletAndDesktop : promosMobile
        }
      />

      {/* <ShopCategory /> */}

      <RecommendsSlider title="Brand new models" products={newProducts} />

      {/* <CategoriesFilter /> */}

      {/* <RecommendsSlider title="Hot prices" products={null} /> */}
    </section>
  );
};
