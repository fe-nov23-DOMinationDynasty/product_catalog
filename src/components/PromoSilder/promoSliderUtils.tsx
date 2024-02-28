export const getPagination = () => (
  {
    bulletClass: "promo-swiper__pagination-bullet",
    bulletActiveClass: "promo-swiper__pagination-bullet--active",
    clickable: true,
    el: '.promo-swiper__pagination',
    renderBullet: (_index: number, className: string) => {
      return `<span class="${className} promo-swiper__pagination-bullet"></span>`;
    },
  }
);
