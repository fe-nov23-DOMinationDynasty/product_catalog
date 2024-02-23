/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartSlice';
import { actions as favouriteActions } from '../../features/favouritesSlice';
import { Phone } from '../../types/Phone';
import { Tablet } from '../../types/Tablet';
import { Accessory } from '../../types/Accessory';
import './ProductButtons.scss';

interface Props {
  product: Phone | Tablet | Accessory | null;
}

export const ProductButtons: React.FC<Props> = ({ product }) => {
  const { id } = product;

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

    dispatch(cartActions.add(product));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(favouriteActions.delete(id));

      return;
    }

    dispatch(favouriteActions.add(product));
  };

  return (
    <div className="product-buttons">
      <button
        onClick={handleProductCartStatusChanged}
        type="button"
        className={cn('product-buttons__button-add button button-add', {
          'button-add--selected': isInCart,
        })}>
        {isInCart ? 'Added to cart' : 'Add to cart'}
      </button>

      <button
        onClick={handleFavouriteProductStatusChanged}
        type="button"
        className={cn('button button-favourite product-buttons__button-fav', {
          'button-favourite--selected': isInFavourite,
        })}
      />
    </div>
  );
};
