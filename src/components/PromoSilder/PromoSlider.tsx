/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useRef } from 'react';
import cn from 'classnames';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton';
import { Promo } from '../../types/Promo';


import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css/pagination';
import 'swiper/css';
import './PromoSlider.scss';
import { useResize } from '../../hooks/useResize';
import { tabletWidth } from '../../constants/constants';
import { animDuration } from '../../styles/utils/AOS';
import { getPagination } from './promoSliderUtils';
import { Theme } from '../../enums/Theme';
import { useAppSelector } from '../../app/hooks';


interface Props {
  promos: Promo[] | null;
}

export const PromoSlider: React.FC<Props> = React.memo(({ promos }) => {
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  const [windowWidth] = useResize();
  const swiperRef = useRef<SwiperRef>(null);

  const isTablet = windowWidth >= tabletWidth;

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
    >
      {isTablet && promos
        ? (
          <button
            data-aos="zoom-out"
            data-aos-duration={animDuration}
            type="button"
            onClick={handlePrev}
            className={cn('promo-swiper__prev-button button--arrow-left', {
              'promo-swiper__prev-button--dark': isDark,
              'button--arrow-left--dark': isDark,
            })}
          />
        )
        : (
          <Skeleton className="promo-swiper__button-skeleton" />
        )}

      <div className="promo-swiper__wrapper">
        {promos
          ? (<Swiper
            data-aos="zoom-out"
            data-aos-duration={animDuration}
            loop
            autoplay
            ref={swiperRef}
            pagination={getPagination(isDark)}
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
          )
          : (
            <Skeleton className='promo-swiper__swiper--skeleton' />
          )}

        <div className="promo-swiper__pagination" />
      </div>

      {isTablet && promos
        ? (
          <button
            data-aos="zoom-out"
            data-aos-duration={animDuration}
            type="button"
            onClick={handleNext}
            className={cn('promo-swiper__prev-button button--arrow-right', {
              'promo-swiper__prev-button--dark': isDark,
              'button--arrow-right--dark': isDark,
            })}
          />
        )
        : (
          <Skeleton className="promo-swiper__button-skeleton" />
        )}
    </div>
  );
});
