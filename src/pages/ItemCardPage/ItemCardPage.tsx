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

export const ItemCardPage = () => {
  const navigation = useNavigate();
  const { itemId, productCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<Phone | Tablet | Accessory | null>(null);

  const {
    capacity,
    color,
    images,
    namespaceId,
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
          <div className="item-card-page__swiper">
            <ProductSwiper images={images as string[]} />
          </div>

          <article className="item-card-page__characteristics">
            <div className="item-card-page__characteristic-block item-card-page__characteristic-block--color-picker">
              <CharacteristicsBlock
                onSelected={handleColorChanged}
                options={colorsAvailable}
                selectedOption={color}
                title='Available colors'
                subtitle={`ID: ${5}`}
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
          </article>

          <div className="item-card-page__actions">

            <ProductButtons product={currentProduct} />

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
        </>
      )}
    </section>
  );
};
