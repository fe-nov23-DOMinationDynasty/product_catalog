import cn from 'classnames';

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
