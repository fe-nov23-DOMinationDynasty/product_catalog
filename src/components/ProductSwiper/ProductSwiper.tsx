import { SwiperSlide, Swiper } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import React from 'react';

import './ProductSwiper.scss';

interface Props {
  images: string[];
}

export const ProductSwiper: React.FC<Props> = ({ images }) => {
  const pagination = {
    bulletClass: 'product-swiper__pagination-item',
    bulletActiveClass: 'product-swiper__pagination-item--active',
    clickable: true,
    el: '.product-swiper__pagination',
    renderBullet: (index: number, className: string) => {
      return `<div class="${className}"><img src="${images[index]}" alt="pagination_item" class="product-swiper__pagination-image" /></div>`;
    },
  };

  return (
    <>
      <div className="product-swiper">
        <Swiper
          spaceBetween={50}
          pagination={pagination}
          modules={[Pagination]}
          className="product-swiper__swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image} className="product-swiper__slide">
              <img
                src={image}
                alt="product_picture"
                className="product-swiper__picture"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="product-swiper__pagination" />
    </>
  );
};
