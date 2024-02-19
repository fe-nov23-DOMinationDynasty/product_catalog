/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import './productCard.scss';
import { Product } from '../../types/Product';
import { shownProductCardCharacteristics } from '../../constants/constants';

interface Props {
  product: Product,
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    category,
    name,
    price
  } = product;

  return (
    <article className="product-card">
      <img
        src="../img/phones/apple-iphone-14-pro/spaceblack/00.webp"
        alt={`${category}_image`}
        className="product-card__image"
      />

      <h2 className="product-card__title">
        {name}
      </h2>

      <p className="product-card__price">{`$${price}`}</p>

      <div className="product-card__characteristics">
        {shownProductCardCharacteristics
          .map(characteristic => (
            <p className="product-card__characteristic">
              <span className="product-card__characteristic-name">
                {characteristic}
              </span>
              <span className="product-card__characteristic-value">
                {product[characteristic.toLowerCase() as keyof Product]}
              </span>
            </p>
          ))}
      </div>

      <div className="product-card__buttons">
        <button type="button" className={cn('button button-add', {
          'button-add--selected': false,
        })}>
          Add to cart
        </button>

        <button type="button" className={cn('button button-favourite', {
          'button-favourite--selected': false,
        })} />
      </div>
    </article>
  );
};
