import React from 'react';
import './ShopCategory.scss';
import '../../styles/utils/text-styles.scss';
import { Category } from '../../enums/Category';
import { useAppSelector } from '../../app/hooks';

export const ShopCategory: React.FC = () => {
  const categories = Object.values(Category);
  const { products } = useAppSelector(state => state.productsReducer);

  return (
    <section className="shop" id="shop">
      <h2 className="section-title h2">Shop by category</h2>
      <div className="shop__categories">
        {categories.map((category) => (
          <article className="product shop__product">
            <div className="product__photo-container">
              <span className={`product__photo product__photo--${category}`} />
            </div>

            <h4 className="product__title h4">
              {category === Category.Phones ? 'Mobile Phones' : category}
            </h4>
            <span className="product__counter">
              {`${products.filter(product => product.category === category).length} models`}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};
