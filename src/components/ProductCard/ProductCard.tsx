/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './productCard.scss';
import { Product } from '../../types/Product';
import { shownProductCardCharacteristics } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart, deleteFromCart } from '../../features/cartSlice';
import {
  addToFavourites,
  deleteFromFavourites,
} from '../../features/favouritesSlice';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, category, name, price, fullPrice, image } = product;
  const { cartProductIds } = useAppSelector((state) => state.cartReducer);
  const { favouriteProductIds } = useAppSelector(
    (state) => state.favouritesReducer
  );
  const dispatch = useAppDispatch();

  const isInCart = cartProductIds.includes(id);
  const isInFavourite = favouriteProductIds.includes(id);

  const handleProductCartStatusChanged = () => {
    if (isInCart) {
      dispatch(deleteFromCart(id));

      return;
    }

    dispatch(addToCart(id));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(deleteFromFavourites(id));

      return;
    }

    dispatch(addToFavourites(id));
  };

  return (
    <article className="product-card">
      <Link to={`/item/${id}`} className="product-card__link">
        <img
          src={image}
          alt={`${category}_image`}
          className="product-card__image"
        />
        <p className="product-card__title">{name}</p>
      </Link>
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
            onClick={handleProductCartStatusChanged}
            type="button"
            className={cn('button button-add', {
              'button-add--selected': isInCart,
            })}>
            {isInCart ? 'Added to cart' : 'Add to cart'}
          </button>
          <button
            onClick={handleFavouriteProductStatusChanged}
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
