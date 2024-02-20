import { Promo } from '../../types/Promo';
import './home-page.scss';
import { PromoSlider } from '../../components/PromoSilder';
import { tabletWidth } from '../../constants/constants';
import { useResize } from '../../hooks/useResize';

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
