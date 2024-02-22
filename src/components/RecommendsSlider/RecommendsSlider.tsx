/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Product } from '../../types/Product';

import { ProductCard } from '../ProductCard';
import './RecommendsSlider.scss';
import '../../styles/blocks/button.scss';

interface Props {
  title: string;
  products: Product[];
}

export const RecommendsSlider: React.FC<Props> = ({ title, products }) => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) {
      return;
    }

    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) {
      return;
    }

    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="slider">
      <div className="slider__header">
        <h2 className="slider__title h2">{title}</h2>

        <div className="slider__buttons">
          <button
            type="button"
            className="button button--arrow-left"
            onClick={handlePrev}
          />
          <button
            type="button"
            className="button button--arrow-right"
            onClick={handleNext}
          />
        </div>
      </div>

      <div className="slider__products">
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="reccomend-swiper">
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
