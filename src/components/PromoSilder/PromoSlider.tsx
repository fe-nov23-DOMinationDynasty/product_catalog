/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useRef, useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { tabletWidth } from '../../constants/constants';
import { Promo } from '../../types/Promo';

import 'swiper/css/pagination';
import 'swiper/css';
import './PromoSlider.scss';
import './swiper-styles.scss';
import { useResize } from '../../hooks/useResize';

interface Props {
  promos: Promo[];
}

export const PromoSlider: React.FC<Props> = React.memo(({ promos }) => {
  const [windowWidth] = useResize();
  const [slideIndex, setSlideIndex] = useState(0);

  const isTablet = windowWidth >= tabletWidth;

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
    <div className="promo-swiper">
      {isTablet && (
        <button
          type="button"
          onClick={handlePrev}
          className={
            // eslint-disable-next-line max-len
            cn('promo-swiper__prev-button button--arrow-left', {
              'button--disabled button--arrow-left--disabled': slideIndex === 0,
            })
          }
        />
      )}
      <div className="promo-swiper__wrapper">
        <Swiper
          onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          ref={swiperRef}
          pagination={{
            clickable: true,
            el: '.promo-swiper__custom-pagination',
            renderBullet: (index: number, className: string) => {
              return `<span class="${className}"></span>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          {promos.map((promo) => (
            <SwiperSlide key={promo.image}>
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
        <div className="promo-swiper__custom-pagination" />
      </div>

      {isTablet && (
        <button
          type="button"
          onClick={handleNext}
          className={
            // eslint-disable-next-line max-len
            cn('promo-swiper__next-button button--arrow-right', {
              'button--disabled button--arrow-right--disabled':
                swiperRef.current?.swiper.realIndex === promos.length - 1,
            })
          }
        />
      )}
    </div>
  );
});
