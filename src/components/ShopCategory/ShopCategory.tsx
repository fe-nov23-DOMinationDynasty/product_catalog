import React from 'react';
import './shopcategory.scss';
import '../../styles/utils/text-styles.scss';
import { Category } from '../../enums/Category';

export const ShopCategory: React.FC = () => {
  const categories = Object.values(Category);

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
            <span className="product__counter">95 models</span>
          </article>
        ))}

        {/* <article className="product shop__product">
          <div className="product__photo-container">
            <span className="product__photo product__photo--phones" />
          </div>

          <h4 className="product__title h4">Mobile phones</h4>
          <span className="product__counter">95 models</span>
        </article>

        <article className="product shop__product">
          <div className="product__photo-container">
            <span className="product__photo product__photo--tablets" />
          </div>
          <h4 className="product__title h4">Tablets</h4>
          <span className="product__counter">24 models</span>
        </article>

        <article className="product shop__product">
          <div className="product__photo-container">
            <span className="product__photo product__photo--accessories" />
          </div>
          <h4 className="product__title h4">Accessories</h4>
          <span className="product__counter">100 models</span>
        </article> */}
      </div>
    </section>
  );
};
