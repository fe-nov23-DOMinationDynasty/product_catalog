/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './productCard.scss';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartSlice';
import { actions as favouriteActions } from '../../features/favouritesSlice';
import {
  actions as selectedProductActions
} from '../../features/selectedProductSlice';
import { shownProductCardCharacteristics } from '../../constants/constants';
import { CartProduct } from '../../types/CartItem';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, itemId, category, name, price, fullPrice, image } = product;
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const dispatch = useAppDispatch();

  const isInCart = !!cartItems?.find(
    ({ product: cartProduct }) => cartProduct.id === id
  );

  const isInFavourite = !!favouriteProducts.find(
    (favouriteProduct) => favouriteProduct.id === id
  );

  const handleProductCartStatusChanged = () => {
    if (isInCart) {
      dispatch(cartActions.delete(id));

      return;
    }

    const cartProduct: CartProduct = {
      image,
      id,
      name,
      price,
      itemId,
    };

    dispatch(cartActions.add(cartProduct));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(favouriteActions.delete(id));

      return;
    }

    dispatch(favouriteActions.add(product));
  };

  return (
    <article className="product-card">
      <Link
        onClick={() => dispatch(selectedProductActions.setProduct(product))}
        to={`/catalog/${category}/${itemId}`}
        className="product-card__link">
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
