import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductInfo } from '../../api/products';
import { Loader } from '../../components/Loader';
import './ItemCardPage.scss';
import { Category } from '../../enums/Category';
import { Accessory } from '../../types/Accessory';
import { Tablet } from '../../types/Tablet';
import { Phone } from '../../types/Phone';
import { ProductSwiper } from '../../components/ProductSwiper';

export const ItemCardPage = () => {
  const { itemId, productCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState<
  Phone | Tablet | Accessory | null
  >(null);

  useEffect(() => {
    getProductInfo(productCategory as Category, itemId as string)
      .then(setCurrentProduct)
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return (
    <section className="item-card-page">
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="item-card-page__swiper">
          <ProductSwiper images={currentProduct?.images as string[]} />
        </div>
      )}
    </section>
  );
};
