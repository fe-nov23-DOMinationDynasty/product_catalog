/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Promo } from '../../types/Promo';

import 'swiper/css/pagination';
import 'swiper/css';
import './PromoSlider.scss';
import { useResize } from '../../hooks/useResize';
import { tabletWidth } from '../../constants/constants';
import { animDuration } from '../../styles/utils/AOS';


interface Props {
  promos: Promo[];
}

export const PromoSlider: React.FC<Props> = React.memo(({ promos }) => {
  const [windowWidth] = useResize();

  const isTablet = windowWidth >= tabletWidth;

  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    Aos.init();
  }, []);

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
    <div
      className="promo-swiper"
      data-aos="fade-down"
      data-aos-duration={animDuration}
    >
      {isTablet && (
        <button
          type="button"
          onClick={handlePrev}
          className="promo-swiper__prev-button button--arrow-left"
        />
      )}
      <div className="promo-swiper__wrapper">
        <Swiper
          loop
          autoplay
          ref={swiperRef}
          pagination={{
            bulletClass: "promo-swiper__pagination-bullet",
            bulletActiveClass: "promo-swiper__pagination-bullet--active",
            clickable: true,
            el: '.promo-swiper__pagination',
            renderBullet: (_index: number, className: string) => {
              return `<span class="${className} promo-swiper__pagination-bullet"></span>`;
            },
          }}
          modules={[Pagination, Autoplay]}
          className="promo-swiper__swiper">
          {promos.map((promo) => (
            <SwiperSlide key={promo.image} className="promo-swiper__slide">
              <Link to={promo.link} className="promo-swiper__link">
                <img
                  src={promo.image}
                  alt="promo"
                  className="promo-swiper__slide-image"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="promo-swiper__pagination" />
      </div>

      {isTablet && (
        <button
          type="button"
          onClick={handleNext}
          className="promo-swiper__next-button button--arrow-right"
        />
      )}
    </div>
  );
});
