/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import './productCard.scss';
import { Product } from '../../types/Product';
import { shownProductCardCharacteristics } from '../../constants/constants';

interface Props {
  product: Product;
  isInCart: boolean;
  isInFavourite: boolean;
  addToFavourite: (id: number) => void;
  addToCart: (id: number) => void;
}

export const ProductCard: React.FC<Props> = ({
  product,
  isInCart,
  isInFavourite,
  addToCart,
  addToFavourite,
}) => {
  const { id, category, name, price, fullPrice, image } = product;

  const handleAddedToCart = () => {
    addToCart(id);
  };

  const handleAddedToFavourite = () => {
    addToFavourite(id);
  };

  return (
    <article className="product-card">
      <img
        src={image}
        alt={`${category}_image`}
        className="product-card__image"
      />

      <p className="product-card__title">{name}</p>

      <div className="product-card__bottom-part">
        <div className="product-card__price">
          <p className="product-card__actual-price h3">{`$${price}`}</p>
          {fullPrice !== price && (
            <p className="product-card__full-price h3">{`$${fullPrice}`}</p>
          )}
        </div>
        <div className="product-card__characteristics">
          {shownProductCardCharacteristics.map((characteristic) => (
            <p className="product-card__characteristic" key={characteristic}>
              <span className="product-card__characteristic-name small-text">
                {characteristic}
              </span>
              <span className="product-card__characteristic-value small-text">
                {product[characteristic.toLowerCase() as keyof Product]}
              </span>
            </p>
          ))}
        </div>
        <div className="product-card__buttons">
          <button
            onClick={handleAddedToCart}
            type="button"
            className={cn('button button-add', {
              'button-add--selected': isInCart,
            })}>
            {isInCart ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            onClick={handleAddedToFavourite}
            type="button"
            className={cn('button button-favourite', {
              'button-favourite--selected': isInFavourite,
            })}
          />
        </div>
      </div>
    </article>
  );
};
