import cn from 'classnames';
import { Promo } from '../../types/Promo';

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

export const getPagination = (isDark: boolean) => (
  {
    bulletClass: `${cn('promo-swiper__pagination-bullet', {
      'promo-swiper__pagination-bullet--dark': isDark,
    })}`,
    bulletActiveClass: `${cn('promo-swiper__pagination-bullet--active', {
      'promo-swiper__pagination-bullet--active-dark': isDark,
    })}`,
    clickable: true,
    el: '.promo-swiper__pagination',
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className}"></span>`;
    },
  }
);
