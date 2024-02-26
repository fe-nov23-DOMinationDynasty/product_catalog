import { SwiperSlide, Swiper } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import React from 'react';

import './ProductSwiper.scss';
import { getPagination } from './productSwiperUtils';

interface Props {
  images: string[];
}

export const ProductSwiper: React.FC<Props> = ({ images }) => {
  return (
    <>
      <div className="product-swiper">
        <Swiper
          spaceBetween={50}
          pagination={getPagination(images)}
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
