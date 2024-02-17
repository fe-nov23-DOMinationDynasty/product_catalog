import React from "react";
import './shopcategory.scss';

export const ShopCategory:React.FC = () => {
  return (
    <section className="shop" id="shop">
      <h2 className="section-title h2">Shop by category</h2>
      <div className="shop__by-category">
        <article className="product shop__product">
          <img
            src="../../img/category-phones.png"
            alt="categoty-phone"
            className="product__photo"
          />
          <h3 className="product__title">
            Mobile phones
          </h3>
          <span className="product__counter">
            95 models
          </span>
        </article>

        <article className="product shop__product">
          <img
            src="../../img/category-tablets.png"
            alt="categoty-tablet"
            className="product__photo"
          />
          <h3 className="product__title">
            Tablets
          </h3>
          <span className="product__counter">
            24 models
          </span>
        </article>

        <article className="product shop__product">
          <img
            src="../../img/category-accessories.png"
            alt="categoty-tablet"
            className="product__photo"
          />
          <h3 className="product__title">
            Accessories
          </h3>
          <span className="product__counter">
            100 models
          </span>
        </article>
      </div>
    </section>
  );
};
