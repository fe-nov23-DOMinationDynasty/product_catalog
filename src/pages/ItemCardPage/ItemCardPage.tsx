/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductInfo, getSpecifiedProduct } from '../../api/products';
import { Loader } from '../../components/Loader';
import './ItemCardPage.scss';
import { Category } from '../../enums/Category';
import { Accessory } from '../../types/Accessory';
import { Tablet } from '../../types/Tablet';
import { Phone } from '../../types/Phone';
import { ProductSwiper } from '../../components/ProductSwiper';
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

export const ItemCardPage = () => {
  const navigation = useNavigate();
  const { products } = useAppSelector(state => state.productsReducer);
  const { itemId, productCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<Phone | Tablet | Accessory | null>(null);

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
  } = currentProduct || {} as Phone | Tablet | Accessory;


  useEffect(() => {
    getProductInfo(productCategory as Category, itemId as string)
      .then(setCurrentProduct)
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const handleCapacityChanged = (newCapacity: string) => {
    getSpecifiedProduct(
      productCategory as Category,
      namespaceId!,
      newCapacity,
      color
    )
      .then((product) => {
        setCurrentProduct(product);
        navigation(`../${product?.id}`);
      });
  };

  const handleColorChanged = (newColor: string) => {
    getSpecifiedProduct(
      productCategory as Category,
      namespaceId!,
      capacity,
      newColor
    )
      .then((product) => {
        setCurrentProduct(product);
        navigation(`../${product?.id}`);
      });
  };

  return (
    <section className="item-card-page">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="item-card-page__breadcrumbs-container">
            <BreadCrumbs />
          </div>

          <div className="item-card-page__back-button">
            <BackButton />
          </div>

          <h1 className="item-card-page__title h1">
            {name}
          </h1>

          <div className="item-card-page__swiper">
            <ProductSwiper images={images as string[]} key={itemId} />
          </div>

          <div className="item-card-page__actions">

            <div className="item-card-page__characteristic-block item-card-page__characteristic-block--color-picker">
              <CharacteristicsBlock
                onSelected={handleColorChanged}
                options={colorsAvailable}
                selectedOption={color}
                title='Available colors'
                subtitle={`ID: ${itemId}`}
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
                <p className="item-card-page__full-price h3">{`$${priceRegular}`}</p>
              )}
            </div>

            <ProductButtons product={currentProduct as Phone | Tablet | Accessory} category={productCategory!} />

            {Object.keys(TechSpecsForActions).map((specKey) => {
              const specValue = currentProduct?.[
                TechSpecs[specKey as keyof typeof TechSpecs] as keyof (
                  Phone | Tablet | Accessory
                )
              ] as string;

              if (specValue !== undefined && specValue !== null) {
                return (
                  <p className="item-card-page__actions-info" key={specKey}>
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

          <AboutSection description={currentProduct?.description || null} />

          <TechSpecsSection product={currentProduct} />

          <RecommendsSlider title="You may also like" products={products} />
        </>
      )
      }
    </section >
  );
};
