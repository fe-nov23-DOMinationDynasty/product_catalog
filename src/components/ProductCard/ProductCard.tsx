/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { Product } from '../../types/Product';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartSlice';
import { actions as favouriteActions } from '../../features/favouritesSlice';
import { shownProductCardCharacteristics } from '../../constants/constants';
import { CartProduct } from '../../types/CartItem';
import { animDuration } from '../../styles/utils/AOS';
import { LocalFavouriteProducts } from '../../types/localFavouriteProducts';

interface Props {
  product: Product;
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
  } = product;
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
      dispatch(cartActions.delete(itemId));

      return;
    }

    const cartProduct: CartProduct = {
      image,
      itemId,
      name,
      price,
      category,
    };

    dispatch(cartActions.add(cartProduct));
  };

  const handleFavouriteProductStatusChanged = () => {
    if (isInFavourite) {
      dispatch(favouriteActions.delete(itemId));

      return;
    }

    const favProduct: LocalFavouriteProducts = {
      image,
      itemId,
      name,
      price,
      fullPrice,
      screen,
      capacity,
      ram,
      category,
    };

    dispatch(favouriteActions.add(favProduct));
  };

  return (
    <article
      className="product-card"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration={animDuration}
    >
      <Link
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
          <p className="product-card__actual-price">
            {`$${price}`}
          </p>

          {fullPrice !== price && (
            <p className="product-card__full-price">
              {`$${fullPrice}`}
            </p>
          )}
        </div>

        <div className="product-card__characteristics">
          {shownProductCardCharacteristics.map((characteristic) => (
            <p className="product-card__characteristic" key={characteristic}>
              <span className="product-card__characteristic-name small-text">
                {characteristic}
              </span>
              <span className="small-text product-card__characteristic-value">
                {product[characteristic.toLowerCase() as keyof Product]}
              </span>
            </p>
          ))}
        </div>

        <div className="product-card__buttons">
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
        </div>
      </div>
    </article>
  );
};
