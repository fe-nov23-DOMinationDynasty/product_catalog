import { Promo } from '../../types/Promo';
import './home-page.scss';
import { PromoSlider } from './src/components/PromoSilder';
import { tabletWidth } from '../../constants/constants';
import { useResize } from '../../hooks/useResize';

const promoImagesMobile = [
  './promos/promo-image-mobile.webp',
  './promos/promo-image-mobile.webp',
  './promos/promo-image-mobile.webp',
];
const promoImagesTabletAndDesktop = [
  './promos/promo-image-tablet-desktop.webp',
  './promos/promo-image-tablet-desktop.webp',
  './promos/promo-image-tablet-desktop.webp',
];

const promosTabletAndDesktop: Promo[] = promoImagesTabletAndDesktop.map(
  (image) => ({
    image,
    link: 'https://www.apple.com',
  })
);

const promosMobile: Promo[] = promoImagesMobile.map((image) => ({
  image,
  link: 'https://www.apple.com',
}));

export const HomePage = () => {
  const [windowWidth] = useResize();

  return (
    <section className="home-page">
      {/* <h1 className="h1">Welcome to Nice Gadgets store!</h1> */}

      <PromoSlider
        promos={
          windowWidth >= tabletWidth ? promosTabletAndDesktop : promosMobile
        }
      />

      {/* <CustomSwiper title="Brand new models" items={null} />

        <CategoriesFilter />

        <CustomSwiper title="Hot prices" items={null} /> */}
    </section>
  );
};
