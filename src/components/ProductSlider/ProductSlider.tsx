import { SwiperSlide, Swiper } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import React from 'react';

import './ProductSlider.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { getPagination } from './productSwiperUtils';
import { getMockArray } from '../../services/getMockArray';

interface Props {
  images: string[] | null;
}

const amountOfSkeletonPagination = 4;

export const ProductSwiper: React.FC<Props> = ({ images }) => {
  return (
    <>
      <div className="product-swiper"  >
        <Swiper
          spaceBetween={50}
          pagination={images ? getPagination(images) : {}}
          modules={[Pagination]}
          className="product-swiper__swiper"
          wrapperClass='product-swiper__swiper-wrapper swiper-wrapper'
        >
          {images
            ? images.map((image) => (
              <SwiperSlide key={image} className="product-swiper__slide" >
                <img
                  data-aos="zoom-in"
                  src={image}
                  alt="product_picture"
                  className="product-swiper__picture"
                />
              </SwiperSlide>
            ))
            : (
              <SwiperSlide>
                <Skeleton className="product-swiper__picture--skeleton" />
              </SwiperSlide>
            )}
        </Swiper>
      </div>

      <div className="product-swiper__pagination">
        {images
          ? null
          : (
            getMockArray(amountOfSkeletonPagination)
              .map((item, index) => (
                <div className="skeleton-wrapper" key={item || index}>
                  <Skeleton
                    className='product-swiper__pagination-image--skeleton'
                  />
                </div>
              ))
          )}
      </div>
    </>
  );
};
