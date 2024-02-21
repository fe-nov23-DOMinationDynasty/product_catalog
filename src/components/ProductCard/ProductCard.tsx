/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './productCard.scss';
import { Product } from '../../types/Product';
import { shownProductCardCharacteristics } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartSlice';
import { actions as favouriteActions } from '../../features/favouritesSlice';
import { getCartProductId } from '../../services/getCartProductIds';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, category, name, price, fullPrice, image } = product;
  const cartProducts = useAppSelector((state) => state.cartReducer);
  const favouriteProductIds = useAppSelector(
    (state) => state.favouritesReducer
  );
  const dispatch = useAppDispatch();

  const isInCart = !!cartProducts?.find(
    (cartProduct) => getCartProductId(cartProduct) === id
  );

  const isInFavourite = favouriteProductIds.includes(id);

  const handleProductCartStatusChanged = () => {
    if (isInCart) {
      dispatch(cartActions.delete(id));

      return;
    }

    dispatch(cartActions.add(id));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(favouriteActions.delete(id));

      return;
    }

    dispatch(favouriteActions.add(id));
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
