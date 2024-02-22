import { Promo } from "../types/Promo";

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

export const promosTabletAndDesktop: Promo[] = promoImagesTabletAndDesktop.map(
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

export const promosMobile: Promo[] = promoImagesMobile.map((image, index) => {
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