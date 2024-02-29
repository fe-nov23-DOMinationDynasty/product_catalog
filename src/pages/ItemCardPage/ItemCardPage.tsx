/* eslint-disable max-len */
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';

import { getProductInfo, getSpecifiedProduct } from '../../api/products';
import { Loader } from '../../components/Loader';
import './ItemCardPage.scss';
import { Category } from '../../enums/Category';
import { ProductSwiper } from '../../components/ProductSlider';
import { TechSpecsSection } from '../../components/TechSpecsSection';
import { AboutSection } from '../../components/AboutSection';
import { TechSpecs, TechSpecsForActions } from '../../enums/TechSpecs';
import { ProductButtons } from '../../components/ProductButtons';
import {
  CharacteristicsBlock
} from '../../components/CharacteristicsBlock/CharacteristicsBlock';
import { BackButton } from '../../components/BackButton';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { RecommendsSlider } from '../../components/RecommendsSlider';
import { useAppSelector } from '../../app/hooks';
import { ProductInfo } from '../../types/ProductInfo';
import { Theme } from '../../enums/Theme';

export const ItemCardPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const { products } = useAppSelector(state => state.productsReducer);
  const { itemId } = useParams();
  const productCategory = location.pathname.split('/').at(-2) as Category;
  const selectedProductId = useMemo(() => (
    (products.find(product => product.itemId === itemId)?.id
    )), [itemId, products]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSwiperLoading, setIsSwiperLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductInfo | null>(null);
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  useEffect(() => {
    getProductInfo(productCategory as Category, itemId as string)
      .then(setCurrentProduct)
      .finally(() => {
        setIsLoading(false);
        setIsSwiperLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const {
    name,
    capacity,
    color,
    images,
    namespaceId,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    capacityAvailable,
  } = currentProduct || {} as ProductInfo;

  const handleCapacityChanged = (newCapacity: string) => {
    if (newCapacity !== capacity) {
      setIsSwiperLoading(true);

      getSpecifiedProduct(
        productCategory as Category,
        namespaceId,
        newCapacity,
        color
      )
        .then((product) => {
          navigation(`../${productCategory}/${product?.id}`);
        });
    }
  };

  const handleColorChanged = (newColor: string) => {
    if (newColor !== color) {
      setIsSwiperLoading(true);

      getSpecifiedProduct(
        productCategory as Category,
        namespaceId,
        capacity,
        newColor
      )
        .then((product) => {
          navigation(`../${productCategory}/${product?.id}`);
        });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [itemId]);

  return (
    <section className="item-card-page">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="item-card-page__header">
            <div className="item-card-page__breadcrumbs-container">
              <BreadCrumbs />
            </div>

            <div className="item-card-page__back-button">
              <BackButton />
            </div>

            <h1 className="item-card-page__title h1">
              {name}
            </h1>
          </div>

          <div
            className={cn('item-card-page__swiper', {
              'item-card-page__swiper--loading': isSwiperLoading,
            })}
          >
            {isSwiperLoading
              ? <Loader />
              : <ProductSwiper images={images} />
            }
          </div>

          <div className="item-card-page__actions">
            <div className="item-card-page__characteristic-block item-card-page__characteristic-block--color-picker">
              <CharacteristicsBlock
                onSelected={handleColorChanged}
                options={colorsAvailable}
                selectedOption={color}
                title='Available colors'
                subtitle={`ID: ${selectedProductId}`}
                isColorPicker
              />
            </div>

            <div className="item-card-page__characteristic-block">
              <CharacteristicsBlock
                onSelected={handleCapacityChanged}
                options={capacityAvailable}
                selectedOption={capacity}
                title='Select capacity'
              />
            </div>

            <div className="item-card-page__price">
              <p className="item-card-page__actual-price h2">{`$${priceDiscount}`}</p>

              {priceRegular !== priceDiscount && (
                <p className={cn('item-card-page__full-price h3', {
                  'item-card-page__full-price--dark': isDark,
                })}>
                  {`$${priceRegular}`}
                </p>
              )}
            </div>

            <div className="item-card-page__actions-buttons">
              <ProductButtons product={currentProduct as ProductInfo} category={productCategory!} />
            </div>


            <div className="item-card-page__actions-specs">
              {Object.keys(TechSpecsForActions).map((specKey) => {
                const specValue = currentProduct?.[
                  TechSpecs[specKey as keyof typeof TechSpecs] as keyof ProductInfo
                ] as string;

                if (!specValue) {
                  return (
                    <p className="item-card-page__actions-info small-text" key={specKey}>
                      <span className="item-card-page__actions-name">
                        {specKey}
                      </span>

                      <span className="item-card-page__actions-configuration">
                        {specValue}
                      </span>
                    </p>
                  );
                }

                return null;
              })}
            </div>
          </div>

          <div className="item-card-page__container item-card-page__container--about">
            <AboutSection description={currentProduct?.description || null} />
          </div>

          <div className="item-card-page__container item-card-page__container--tech">
            <TechSpecsSection product={currentProduct!} productCategory={productCategory!} />
          </div>

          <div className="item-card-page__container item-card-page__container--rec">
            <RecommendsSlider title="You may also like" products={products} />
          </div>
        </>
      )
      }
    </section >
  );
};
