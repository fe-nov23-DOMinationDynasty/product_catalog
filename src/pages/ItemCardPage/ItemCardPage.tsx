/* eslint-disable max-len */
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

import { getProductInfo, getSpecifiedProduct } from '../../api/products';
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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductInfo } from '../../types/ProductInfo';
import { wait } from '../../utils/fetchClient';
import { actions as productsActions } from '../../features/productsSlice';
import { requestDelay } from '../../constants/constants';

export const ItemCardPage = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.productsReducer);
  const { itemId } = useParams();
  const productCategory = location.pathname.split('/').at(-2) as Category;

  const selectedProductId = useMemo(() => {
    if (products.length) {
      return products.find(product => product.itemId === itemId)?.id;
    }

    dispatch(productsActions.loadProducts());

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, products]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<ProductInfo | null>(null);

  useEffect(() => {
    wait(requestDelay)
      .then(() => {
        return getProductInfo(productCategory as Category, itemId as string);
      })
      .then(setCurrentProduct)
      .finally(() => {
        setIsLoading(false);
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
      setIsLoading(true);
      setCurrentProduct(null);

      wait(1000)
        .then(() => {
          return getSpecifiedProduct(
            productCategory as Category,
            namespaceId,
            newCapacity,
            color
          );
        })
        .then((product) => {
          navigation(`../${productCategory}/${product?.id}`);
        });
    }
  };

  const handleColorChanged = (newColor: string) => {
    if (newColor !== color) {
      setIsLoading(true);
      setCurrentProduct(null);

      wait(1000)
        .then(() => {
          return getSpecifiedProduct(
            productCategory as Category,
            namespaceId,
            capacity,
            newColor
          );
        })
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

      <div className="item-card-page__header">
        <div className="item-card-page__breadcrumbs-container">
          <BreadCrumbs />
        </div>

        <div className="item-card-page__back-button">
          <BackButton />
        </div>

        <h1 className="item-card-page__title h1">
          {name || <Skeleton className='item-card-page__title-skeleton' />}
        </h1>
      </div>

      <div className="item-card-page__swiper">
        <ProductSwiper images={images} key={color} />
      </div>

      <div className="item-card-page__actions">
        <div className="item-card-page__characteristic-block item-card-page__characteristic-block--color-picker">
          <CharacteristicsBlock
            onSelected={handleColorChanged}
            options={colorsAvailable}
            selectedOption={color}
            title='Available colors'
            withSubtitle
            subtitle={selectedProductId ? `${selectedProductId}` : null}
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
          {priceRegular
            ? (
              <>
                <p className="item-card-page__actual-price h2">{`$${priceDiscount}`}</p>
                {priceRegular !== priceDiscount && (
                  <p className="item-card-page__full-price h3">{`$${priceRegular}`}</p>
                )}
              </>
            )
            : (
              <Skeleton className='item-card-page__price-skeleton' />
            )}
        </div>

        <div className="item-card-page__actions-buttons">
          <ProductButtons product={currentProduct as ProductInfo} category={productCategory!} />
        </div>


        <div className="item-card-page__actions-specs">
          {
            currentProduct
              ? (
                Object.keys(TechSpecsForActions).map((specKey) => {
                  const specValue = currentProduct?.[
                    TechSpecs[specKey as keyof typeof TechSpecs] as keyof ProductInfo
                  ] as string;

                  if (specValue) {
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
                })
              )
              : (
                <Skeleton count={Object.keys(TechSpecsForActions).length} />
              )
          }
        </div>
      </div>

      <div className="item-card-page__container item-card-page__container--about">
        <AboutSection description={currentProduct?.description || null} />
      </div>

      <div className="item-card-page__container item-card-page__container--tech">
        <TechSpecsSection product={currentProduct} productCategory={productCategory} />
      </div>

      {!isLoading && (
        <div className="item-card-page__container item-card-page__container--rec">
          <RecommendsSlider title="You may also like" products={products} />
        </div>
      )}
    </section >
  );
};
