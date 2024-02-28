/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ProductCard.scss';
import '../../styles/blocks/skeleton-wrapper.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartSlice';
import { actions as favouriteActions } from '../../features/favouritesSlice';
import { shownProductCardCharacteristics } from '../../constants/constants';
import { CartProduct } from '../../types/CartItem';
import { LocalFavouriteProducts } from '../../types/LocalFavouriteProducts';

interface Props {
  product: Product | null;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    itemId,
    category,
    name,
    price,
    fullPrice,
    image,
    capacity,
    screen,
    ram,
  } = product || {};
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const dispatch = useAppDispatch();

  const isInCart = !!cartItems?.find(
    ({ product: cartProduct }) => cartProduct.itemId === itemId
  );

  const isInFavourite = !!favouriteProducts.find(
    (favouriteProduct) => favouriteProduct.itemId === itemId
  );

  const handleProductCartStatusChanged = () => {
    if (isInCart) {
      dispatch(cartActions.delete(itemId!));

      return;
    }

    const cartProduct: CartProduct = {
      image: image!,
      itemId: itemId!,
      name: name!,
      price: price!,
      category: category!,
    };

    dispatch(cartActions.add(cartProduct));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(favouriteActions.delete(itemId!));

      return;
    }

    const favProduct: LocalFavouriteProducts = {
      image: image!,
      itemId: itemId!,
      name: name!,
      price: price!,
      fullPrice: fullPrice!,
      screen: screen!,
      capacity: capacity!,
      ram: ram!,
      category: category!,
    };

    dispatch(favouriteActions.add(favProduct));
  };

  return (
    <article className="product-card">
      <Link
        to={product ? `/${category}/${itemId}` : ''}
        className="product-card__link">
        {image
          ? (
            <img
              src={image}
              alt={`${category}_image`}
              className="product-card__image"
            />)
          : <Skeleton className='product-card__image--skeleton' />
        }
        <p className="product-card__title">
          {name || <Skeleton className='product-card__title--skeleton' />}
        </p>
      </Link>

      <div className="product-card__bottom-part">
        <div className="product-card__price">
          <p className="product-card__actual-price">
            {price ? `$${price}` : <Skeleton className='product-card__price--skeleton' />}
          </p>

          {fullPrice !== price && (
            <p className="product-card__full-price">
              {fullPrice && `$${fullPrice}`}
            </p>
          )}
        </div>

        <div className="product-card__characteristics">
          {product
            ? (
              shownProductCardCharacteristics.map((characteristic) => (
                <p
                  className="product-card__characteristic"
                  key={characteristic}
                >
                  <span
                    className="product-card__characteristic-name small-text"
                  >
                    {characteristic}
                  </span>
                  <span
                    className="small-text product-card__characteristic-value"
                  >
                    {product[characteristic.toLowerCase() as keyof Product]}
                  </span>
                </p>
              )))
            : (
              <Skeleton
                className='product-card__characteristic--skeleton'
                width="100%"
                height={10}
                count={shownProductCardCharacteristics.length}
              />
            )}
        </div>

        <div className="product-card__buttons">
          {product
            ? (
              <>
                <button
                  onClick={handleProductCartStatusChanged}
                  type="button"
                  className={cn('button button--add', {
                    'button--add--selected': isInCart,
                  })}>
                  {isInCart ? 'Added to cart' : 'Add to cart'}
                </button>
                <button
                  onClick={handleFavouriteProductStatusChanged}
                  type="button"
                  className={cn('button button--favourite', {
                    'button--favourite--selected': isInFavourite,
                  })}
                />
              </>
            )
            : (
              <div className="skeleton-wrapper">
                <Skeleton
                  className='product-card__buttons--skeleton'
                />
              </div>
            )}
        </div>
      </div>
    </article >
  );
};
