/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { Product } from '../../types/Product';
import { breakpoints } from '../../constants/constants';

import { ProductCard } from '../ProductCard';
import 'swiper/css';
import './RecommendsSlider.scss';
import '../../styles/blocks/button.scss';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

interface Props {
  title: string;
  products: Product[];
}

export const RecommendsSlider: React.FC<Props> = ({ title, products }) => {
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;
  const swiperRef = useRef<SwiperRef>(null);
  const [slideIndex, setSlideIndex] = useState(0);

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

  const isStartOfIndex = slideIndex === 0;

  // eslint-disable-next-line max-len
  const isEndOfIndex = swiperRef.current && slideIndex === products.length - swiperRef.current.swiper.slidesPerViewDynamic();

  return (
    <div className="slider">
      <div className="slider__header">
        <h2 className="slider__title h2">{title}</h2>

        {products[0] && (
          <div className="slider__buttons">
            <button
              type="button"
              className={cn('button button--arrow-left', {
                'button--arrow-left--disabled': isStartOfIndex,
                'button--arrow-left--disabled--dark': isStartOfIndex && isDark,
                'button--dark button--arrow-left--dark': isDark,
              })}
              onClick={handlePrev}
            />
            <button
              type="button"
              className={cn('button button--arrow-right', {
                'button--arrow-right--disabled': isEndOfIndex,
                'button--arrow-right--disabled--dark': isDark && isEndOfIndex,
                'button--dark button--arrow-right--dark': isDark,
              })}
              onClick={handleNext}
            />
          </div>
        )}
      </div>

      <div className="slider__products">
        <Swiper
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onSlideChange={(swiper: any) => setSlideIndex(swiper.realIndex)}
          ref={swiperRef}
          slidesPerView={1.5}
          breakpoints={breakpoints}
          spaceBetween={16}
          freeMode
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="reccomend-swiper">
          {products.map((product, index) => (
            <SwiperSlide
              className="reccomend-swiper__item"
              key={product?.id || index}
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
