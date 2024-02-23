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
import {
  CharacteristicsBlock
} from '../../components/CharacteristicsBlock/CharacteristicsBlock';

export const ItemCardPage = () => {
  const navigation = useNavigate();
  const { itemId, productCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProductInfo, setCurrentProductInfo] = useState<
    Phone | Tablet | Accessory | null
  >(null);

  const {
    capacity,
    color,
    namespaceId,
    colorsAvailable,
    capacityAvailable,
  } = currentProductInfo || {} as Phone | Tablet | Accessory;

  useEffect(() => {
    getProductInfo(productCategory as Category, itemId as string)
      .then(setCurrentProductInfo)
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
        setCurrentProductInfo(product);
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
        setCurrentProductInfo(product);
        navigation(`../${product?.id}`);
      });
  };

  return (
    <section className="item-card-page">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="item-card-page__swiper">
            <ProductSwiper images={currentProductInfo?.images as string[]} />
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
        </>
      )}
    </section>
  );
};
