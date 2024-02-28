export const getPagination = (images: string[]) => ({
  bulletClass: 'product-swiper__pagination-item',
  bulletActiveClass: 'product-swiper__pagination-item--active',
  clickable: true,
  el: '.product-swiper__pagination',
  renderBullet: (index: number, className: string) => {
    return `<div class="${className}"><img src="${images[index]}" alt="pagination_item" class="product-swiper__pagination-image" data-aos="zoom-in"/></div>`;
  },
}
);
