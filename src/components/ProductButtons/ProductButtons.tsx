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
import { Theme } from '../../enums/Theme';

interface Props {
  product: Phone | Tablet | Accessory,
  category: string,
}

export const ProductButtons: React.FC<Props> = ({ product, category }) => {
  const { id } = product;
  const productToSave = {
    ...product,
    itemId: id,
    name: product.name,
    image: product.images[0],
    price: product.priceDiscount,
    fullPrice: product.priceRegular,
    category,
  };

  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const dispatch = useAppDispatch();

  const isInCart = !!cartItems?.find(
    ({ product: cartProduct }) => cartProduct.itemId === id
  );

  const isInFavourite = !!favouriteProducts.find(
    (favouriteProduct) => favouriteProduct.itemId === id
  );

  const handleProductCartStatusChanged = () => {
    if (isInCart) {
      dispatch(cartActions.delete(id));

      return;
    }

    dispatch(cartActions.add(productToSave));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(favouriteActions.delete(id));

      return;
    }

    dispatch(favouriteActions.add(productToSave));
  };

  return (
    <div className="product-buttons">
      <button
        onClick={handleProductCartStatusChanged}
        type="button"
        className={cn('product-buttons__button-add button button--add', {
          'button--dark button--add--dark': isDark,
          'button--add--selected': isInCart,
          'button--add--selected--dark': isInCart && isDark,
        })}
      >
        {isInCart ? 'Added to cart' : 'Add to cart'}
      </button>

      <button
        onClick={handleFavouriteProductStatusChanged}
        type="button"
        className={cn('button button--favourite product-buttons__button-fav', {
          'button--dark button--favourite--dark': isDark,
          'button--favourite--selected': isInFavourite,
          'button--favourite--selected--dark': isInFavourite && isDark,
        })}
      />
    </div>
  );
};
